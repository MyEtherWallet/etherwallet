(function() {
  localStorage.getItem("eal-blacklisted-domains") === null
    ? getDomains("eal")
    : checkIfDataIsRecent("eal");
  localStorage.getItem("iosiro-blacklisted-domains") === null
    ? getDomains("iosiro")
    : checkIfDataIsRecent("iosiro");
    localStorage.getItem("phishfort-blacklisted-domains") === null
    ? getDomains("phishfort")
    : checkIfDataIsRecent("phishfort");

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
  let eal = {
    timestamp: 0,
    domains: [],
    format: "plain",
    repo:
      "https://raw.githubusercontent.com/409H/EtherAddressLookup/master/blacklists/domains.json",
    identifer: "eal"
  };

  let iosiro = {
    timestamp: 0,
    domains: [],
    format: "plain",
    repo:
      "https://raw.githubusercontent.com/iosiro/counter_phishing_blacklist/master/blacklists/domains.json",
    identifer: "iosiro"
  };

  let phishfort = {
    timestamp: 0,
    domains: [],
    format: "plain",
    repo:
      "https://raw.githubusercontent.com/phishfort/phishfort-lists/master/blacklists/domains.json",
    identifer: "phishfort"
  };

  let whitelistDef = {
    timestamp: 0,
    domains: [],
    format: "plain",
    repo:
      "https://raw.githubusercontent.com/409H/EtherAddressLookup/master/whitelists/domains.json",
    identifer: "whitelist"
  };
  const SEARCH_STRING = ["myetherwallet"];
  const ealBlacklisted = localStorage.getItem("eal-blacklisted-domains")
    ? JSON.parse(localStorage.getItem("eal-blacklisted-domains"))
    : eal;

  const iosiroBlacklisted = localStorage.getItem("iosiro-blacklisted-domains")
    ? JSON.parse(localStorage.getItem("iosiro-blacklisted-domains"))
    : iosiro;

  const phishfortBlacklisted = localStorage.getItem("phishfort-blacklisted-domains")
  ? JSON.parse(localStorage.getItem("phishfort-blacklisted-domains"))
  : phishfort;

  const whitelisted = localStorage.getItem("409h-whitelisted-domains")
    ? JSON.parse(localStorage.getItem("409h-whitelisted-domains"))
    : whitelistDef;

  const allDomains = ealBlacklisted.domains.concat(iosiroBlacklisted.domains).concat(phishfortBlacklisted.domains);
  let urlRedirect;
  let foundWhitelist = whitelisted.domains.find(dom => {
		if (tabs[0] !== undefined) {
			return dom === extractRootDomain(tabs[0].url);
		}
		return;
  });

  let foundBlacklist = allDomains.find(dom => {
		if (tabs[0] !== undefined) {
			return dom === extractRootDomain(tabs[0].url);
		}
		return;
  });

  if (foundWhitelist === undefined) {
    if (
      foundBlacklist !== undefined ||
      checkUrlSimilarity(tabs[0].url, SEARCH_STRING)
    ) {
      urlRedirect = encodeURI(
        `https://vintage.myetherwallet.com/phishing.html?phishing-address=${
          tabs[0].url
        }`
      );
      chrome.tabs.update(null, { url: urlRedirect });
    }
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
  return domain.toLowerCase();
}

function checkIfDataIsRecent(str) {
  let storedName =
    str === "eal" || str === "iosiro" || str === "phishfort"
      ? str + "-blacklisted-domains"
      : str + "-whitelisted-domains";
  let dataObj = JSON.parse(localStorage.getItem(storedName));
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
    },
    phishfort: {
      timestamp: 0,
      domains: [],
      format: "plain",
      repo:
        "https://raw.githubusercontent.com/phishfort/phishfort-lists/master/blacklists/domains.json",
      identifer: "phishfort"
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
  };

  let newName;

  if (str && str !== "" && (str === "eal" || str === "iosiro" || str == "phishfort")) {
    newName = str + "-blacklisted-domains";
    setInStorage(blackListDomains[str], newName);
  } else if (str && str !== "" && (str !== "eal" || str !== "iosiro" || str != "phishfort")) {
    newName = str + "-whitelisted-domains";
    setInStorage(whiteListDomains[str], newName);
  } else {
    Object.keys(blackListDomains).forEach(src => {
      newName = src + "-blacklisted-domains";
      setInStorage(blackListDomains[src], newName);
    });

    Object.keys(whiteListDomains).forEach(src => {
      newName = src + "-whitelisted-domains";
      setInStorage(whiteListDomains[src], newName);
    });
  }
}

function setInStorage(src, storageName) {
  getDomainsFromSource(src).then(domains => {
    src.timestamp = Math.floor(Date.now() / 1000);
    src.domains = domains;
    localStorage.setItem(storageName, JSON.stringify(src));
  });
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
  if (isSimilar(newUrl, url, arr, 0.8) && !isNewBlacklist(url, arr))
    return true;
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
    if (sim >= percent || !levenshteinCheck(comparedToUrl, arr[i])) {
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
  const distance = new window.cxHelpers.levenshtein(url, validString).distance;
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
      asciiStr += String.fromCharCode(parseInt("0x") + maps[0]);
    } else {
      asciiStr += window.cxHelpers.homoglyphs[char]
        ? window.cxHelpers.homoglyphs[char]
        : char;
    }
  }

  return asciiStr;
}
