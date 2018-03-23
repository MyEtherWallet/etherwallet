(function() {
	var ealObject =
		localStorage.getItem("eal-blacklisted-domains") === null
			? getBlackListedDomains("eal")
			: checkIfDataIsRecent("eal");
	var iosiroObject =
		localStorage.getItem("iosiro-blacklisted-domains") === null
			? getBlackListedDomains("iosiro")
			: checkIfDataIsRecent("iosiro");
	var segasecObject =
		localStorage.getItem("segasec-blacklisted-domains") === null
			? getBlackListedDomains("segasec")
			: checkIfDataIsRecent("segasec");

	setInterval(function() {
		getBlackListedDomains();
	}, 180000);

  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
    querycB(tabs);
  });

  chrome.tabs.onUpdate.addListener(onUpdateCb);
  chrome.tabs.onActivated.addListener(onActivatedcB);
})();



function onActivatedcB (tabs) {
  console.log(info);
}

function onUpdateCb (id, changeInfo, tab) {
  console.log(id)
  console.log(changeInfo)
  console.log(tab)
}

function querycB(tabs) {
  console.log(chrome);
  console.log(tabs);
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
		},
		segasec: {
			timestamp: 0,
			domains: [],
			format: "sha256",
			repo:
				"https://segasec.github.io/PhishingFeed/phishing-domains-sha256.json",
			identifer: "segasec"
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

function isMatch(tab) {
  console.log("Hello There!");
  console.log(tab);
}

async function getDomainsFromSource(objBlacklist) {
	try {
		let objResponse = await fetch(objBlacklist.repo);
		return objResponse.json();
	} catch (objError) {
		console.log("Failed to get blacklist for " + objBlacklist.repo, objError);
	}
}
