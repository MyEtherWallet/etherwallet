(function() {
	localStorage.getItem("eal-blacklisted-domains") === null
		? getBlackListedDomains("eal")
		: checkIfDataIsRecent("eal");
	localStorage.getItem("iosiro-blacklisted-domains") === null
		? getBlackListedDomains("iosiro")
		: checkIfDataIsRecent("iosiro");

	setInterval(function() {
		getBlackListedDomains();
	}, 180000);

	chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
		querycB(tabs);
	});

	chrome.tabs.onActivated.addListener(onActivatedcB);
	chrome.tabs.onUpdated.addListener(onUpdatedCb);
})();

function onActivatedcB() {
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
		querycB(tabs);
	});
}

function onUpdatedCb(id, changeInfo, tab) {
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
	const allDomains = ealBlacklisted.domains.concat(iosiroBlacklisted.domains);
	let urlRedirect;
	let found = allDomains.find(dom => {
		return dom === extractRootDomain(tabs[0].url);
	});

	if (found !== undefined) {
		urlRedirect = encodeURI(`file:///Users/yelpadillo/workspace/mew/myetherwallet/dist/phishing.html?phishing-address=${
			tabs[0].url
		}`);
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
	const storedName = str + "-blacklisted-domains";
	const dataObj = JSON.parse(localStorage.getItem(storedName));
	if (
		dataObj.timestamp === 0 ||
		Math.floor(Date.now() / 1000) - dataObj.timestamp > 300
	) {
		return getBlackListedDomains(str);
	}
	return dataObj;
}

function getBlackListedDomains(str) {
	var blackListDomains = {
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

	if (str && str !== "") {
		let newName = str + "-blacklisted-domains";
		getDomainsFromSource(blackListDomains[str]).then(domains => {
			blackListDomains[str].timestamp = Math.floor(Date.now() / 1000);
			blackListDomains[str].domains = domains;
			localStorage.setItem(newName, JSON.stringify(blackListDomains[str]));
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
