var api = 'http://127.0.0.1:8197';
var blockTargetInterval = 120;
var coinUnits = 100000000;
var symbol = 'QWC';
var refreshDelay = 30000;
// pools stats by QWCcoin
var networkStat = {
    "qwc": [
    	["qwertycoin.site", "https://qwertycoin.site:8119/stats"],
		["qwcpool.partyvibe.com","https://qwcpool.partyvibe.com:8119/stats"],
		["mineallcrypto.com", "https://mineallcrypto.com/qwerty/pool/stats"],
		["cryptoknight.cc/qwerty", "https://cryptoknight.cc/rpc/qwerty/stats"]
    ]
};
