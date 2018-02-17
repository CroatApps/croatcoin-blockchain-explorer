var api = 'http://195.201.27.148:8197';
var blockTargetInterval = 120;
var coinUnits = 100000000;
var symbol = 'QWC';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "qwc": [
		["qwertycoin.site", "https://qwertycoin.site:8119"],
		["pool.ahka.net/qwertycoin", "http://qwc.pool.ahka.net:8116"],
		["qwerty.poolminer.work", "http://qwerty.poolminer.work:8117"],
        ["wc.cnotepool.info", "http://qwc.cnotepool.info:8117"],
        ["cryptoknight.cc/qwerty", "http://78.46.85.142:6559"],
        ["94.130.187.117", "http://94.130.187.117:8117"]
    ]
};