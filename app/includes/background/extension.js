(function() {
	const SEARCH_STRING = ["myetherwallet"];
	const CHECK_PER = 0.8;
	localStorage.getItem("eal-blacklisted-domains") === null
		? getDomains("eal")
		: checkIfDataIsRecent("eal");
	localStorage.getItem("iosiro-blacklisted-domains") === null
		? getDomains("iosiro")
		: checkIfDataIsRecent("iosiro");

	localStorage.getItem("409h-whitelisted-domains") === null
		? getDomains("409h")
		: checkIfDataIsRecent("409h");

	setInterval(function() {
		getDomains();
	}, 180000);

	chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
		querycB(tabs);
	});

	chrome.tabs.onActivated.addListener(cb);
	chrome.tabs.onUpdated.addListener(cb);
})();

function cb() {
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
		querycB(tabs);
	});
}

function querycB(tabs) {
	const ealBlacklisted = JSON.parse(
		localStorage.getItem("eal-blacklisted-domains")
	);
	const iosiroBlacklisted = JSON.parse(
		localStorage.getItem("iosiro-blacklisted-domains")
	);

	const whitelisted = JSON.parse(
		localStorage.getItem("409h-whitelisted-domains")
	);

	const allDomains = ealBlacklisted.domains.concat(iosiroBlacklisted.domains);
	let urlRedirect;
	let foundWhitelist = whitelisted.domains.find(dom => {
		return dom === extractRootDomain(tabs[0].url);
	});

	let foundBlacklist = allDomains.find(dom => {
		return dom === extractRootDomain(tabs[0].url);
	});

	if ((foundBlacklist !== undefined && foundWhitelist === undefined) || checkUrlSimilarity(tabs[0].url, allDomains)) {
		urlRedirect = encodeURI(
			`file:///Users/yelpadillo/workspace/mew/myetherwallet/dist/phishing.html?phishing-address=${
				tabs[0].url
			}`
		);
		chrome.tabs.update(null, { url: urlRedirect });
	}
}

function extractHostname(url) {
	let hostname;
	if (url.indexOf("://") > -1) {
		hostname = url.split("/")[2];
	} else {
		hostname = url.split("/")[0];
	}

	hostname = hostname.split(":")[0];
	hostname = hostname.split("?")[0];

	return hostname;
}

function extractRootDomain(url) {
	let domain = extractHostname(url),
		splitArr = domain.split("."),
		arrLen = splitArr.length;

	if (arrLen > 2) {
		domain = splitArr[arrLen - 2] + "." + splitArr[arrLen - 1];
		if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
			domain = splitArr[arrLen - 3] + "." + domain;
		}
	}
	return domain;
}

function checkIfDataIsRecent(str) {
	let storedName;
	if(str === "eal" || "iosiro") {
		storedName = str + "-blacklisted-domains";
	} else {
		storedName = str + "-whitelisted-domains";
	}
	const dataObj = JSON.parse(localStorage.getItem(storedName));
	if (
		dataObj.timestamp === 0 ||
		Math.floor(Date.now() / 1000) - dataObj.timestamp > 300
	) {
		return getDomains(str);
	}
	return dataObj;
}

function getDomains(str) {
	let blackListDomains = {
		eal: {
			timestamp: 0,
			domains: [],
			format: "plain",
			repo:
				"https://raw.githubusercontent.com/409H/EtherAddressLookup/master/blacklists/domains.json",
			identifer: "eal"
		},
		iosiro: {
			timestamp: 0,
			domains: [],
			format: "plain",
			repo:
				"https://raw.githubusercontent.com/iosiro/counter_phishing_blacklist/master/blacklists/domains.json",
			identifer: "iosiro"
		}
	};

	let whiteListDomains = {
		"409h": {
			timestamp: 0,
			domains: [],
			format: "plain",
			repo:
				"https://raw.githubusercontent.com/409H/EtherAddressLookup/master/whitelists/domains.json",
			identifer: "whitelist"
		}
	}

	if (str && str !== "" && (str === "eal" || str === "iosiro")) {
		let newName = str + "-blacklisted-domains";
		getDomainsFromSource(blackListDomains[str]).then(domains => {
			blackListDomains[str].timestamp = Math.floor(Date.now() / 1000);
			blackListDomains[str].domains = domains;
			localStorage.setItem(newName, JSON.stringify(blackListDomains[str]));
		});
	} else if (str && str !== "" && (str !== "eal" || str !== "iosiro")) {
		Object.keys(whiteListDomains).forEach(src => {
			getDomainsFromSource(whiteListDomains[src]).then(domains => {
				newName = src + "-whitelisted-domains";
				whiteListDomains[src].timestamp = Math.floor(Date.now() / 1000);
				whiteListDomains[src].domains = domains;
				localStorage.setItem(newName, JSON.stringify(whiteListDomains[src]));
			});
		});
	} else {
		Object.keys(blackListDomains).forEach(src => {
			getDomainsFromSource(blackListDomains[src]).then(domains => {
				newName = src + "-blacklisted-domains";
				blackListDomains[src].timestamp = Math.floor(Date.now() / 1000);
				blackListDomains[src].domains = domains;
				localStorage.setItem(newName, JSON.stringify(blackListDomains[src]));
			});
		});

		Object.keys(whiteListDomains).forEach(src => {
			getDomainsFromSource(whiteListDomains[src]).then(domains => {
				newName = src + "-whitelisted-domains";
				whiteListDomains[src].timestamp = Math.floor(Date.now() / 1000);
				whiteListDomains[src].domains = domains;
				localStorage.setItem(newName, JSON.stringify(whiteListDomains[src]));
			});
		});
	}
}

async function getDomainsFromSource(objBlacklist) {
	try {
		let objResponse = await fetch(objBlacklist.repo);
		return objResponse.json();
	} catch (objError) {
		console.log("Failed to get blacklist for " + objBlacklist.repo, objError);
	}
}

function checkUrlSimilarity(url, arr) {
	let newUrl = transformHomoglyphs(parseUrl(url));
	if(isSimilar(newUrl, url, arr, 0.8) && !isNewBlacklist(url, arr)) return true;
	return false;
}

function isNewBlacklist(url, arr) {
	for (let i = 0; i < arr.length; i++) {
    if (arr[i] === url) {
			return false;
		}
  }
  return true;
}

function isSimilar(newUrl, comparedToUrl, arr, percent) {
	for (let i = 0; i < arr.length; i++) {
		let sim = window.cxHelpers.similarity(arr[i], newUrl);
		if (sim >= percent && !levenshteinCheck(comparedToUrl, arr[i])) {
			return true;
		}
	}

	return false;
}

function parseUrl(url) {
	try {
		return window.cxHelpers.punycode.toUnicode(url);
	} catch (e) {
		return url;
	}
}

function levenshteinCheck(url, validString) {
	const distance = new window.cxHelpers.levenshtein(mLink, validString).distance;
	const holisticStd = 3.639774978064392;
	const holisticLimit = 4 + 1 * holisticStd;
	return distance > 0 && distance < holisticLimit ? true : false;
}

function transformHomoglyphs(str) {
	let asciiStr = "";
	for (const char of str) {
		let uInfo = window.cxHelpers.uniMap[char.charCodeAt(0)];

		if (uInfo && uInfo.mapping) {
			let maps = uInfo.mapping.split(" ");
			asciiStr += String.fromCharCode(parseInt('0x') + maps[0]);
		} else {
			asciiStr += window.cxHelpers.homoglyphs[char] ? window.cxHelpers.homoglyphs[char] : char;
		}
	}

	return asciiStr;
}
