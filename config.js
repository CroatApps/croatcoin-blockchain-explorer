var api = 'http://127.0.0.1:8197';
var blockTargetInterval = 120;
var coinUnits = 100000000;
var symbol = 'QWC';
var refreshDelay = 30000;
// pools stats by QWCcoin
var networkStat = {
    "qwc": [
    	["qwertycoin.site", "https://qwertycoin.site:8119/stats"],
		["qwcpool.partyvibe.com","http://qwcpool.partyvibe.com:8118/stats"],
		["qwerty.mineallcrypto.com", "http://qwerty.mineallcrypto.com:6076/stats"],
		["pool.ahka.net/qwertycoin", "http://qwc.pool.ahka.net:8116/stats"],
        ["qwerty.poolminer.work", "http://qwerty.poolminer.work:8117/stats"],
        ["wc.cnotepool.info", "http://qwc.cnotepool.info:8117/stats"],
        ["cryptoknight.cc/qwerty", "http://78.46.85.142:6559/stats"],
        ["superblockchain.con-ip.com", "http://superblockchain.con-ip.com:8333/stats"],
        ["qwertycoin.poolmining.it", "http://qwertycoin.poolmining.it:8117/stats"],
		["pool-marine.ga/qwc", "http://pool-marine.ga:8113/stats"]
    ]
};
