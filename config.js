var api = 'http://127.0.0.1:8197';
var blockTargetInterval = 120;
var coinUnits = 100000000;
var symbol = 'QWC';
var refreshDelay = 30000;
// pools stats by QWCcoin
var networkStat = {
    "qwc": [
    	["qwertycoin.site", "https://qwertycoin.site:8119/stats"],
		["pool.ahka.net/qwertycoin", "http://qwc.pool.ahka.net:8116/stats"],
		["cryptoknight.cc/qwerty", "http://78.46.85.142:6559/stats"],
		["qwerty.poolminer.work", "http://qwerty.poolminer.work:8117/stats"],
		["pool.mineallcrypto.com", "http://pool.mineallcrypto.com:6076/stats"],
		["superblockchain.con-ip.com", "http://superblockchain.con-ip.com:8333/stats"],
		["qwertycoin.poolmining.it", "http://qwertycoin.poolmining.it:8117/stats"],
		["qwc.dreampool.info", "https://qwc.dreampool.info/api/stats"],
		["qwcpool.partyvibe.com","http://qwcpool.partyvibe.com:8118/stats"],
		["qwertycoin.sixpools.tk", "http://qwertycoin.sixpools.tk:8118/stats"]		
    ]
};