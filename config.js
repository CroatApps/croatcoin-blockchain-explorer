var api = 'http://127.0.0.1:8197';
var blockTargetInterval = 120;
var coinUnits = 100000000;
var symbol = 'QWC';
var refreshDelay = 30000;
// pools stats by QWCcoin
var networkStat = {
	"qwc": [
		["qwertycoin.site", "https://qwertycoin.site:8119"],
		["pool.ahka.net/qwertycoin", "http://qwc.pool.ahka.net:8116"],
		["cryptoknight.cc/qwerty", "http://78.46.85.142:6559"],
		["qwerty.poolminer.work", "http://qwerty.poolminer.work:8117"],
		["pool.mineallcrypto.com", "http://pool.mineallcrypto.com:6076"],
		["superblockchain.con-ip.com", "http://superblockchain.con-ip.com:8333"],
		["qwertycoin.poolmining.it", "http://qwertycoin.poolmining.it:8117"],
		["qwc.dreampool.info", "https://qwc.dreampool.info/api"],
		["qwcpool.partyvibe.com","http://qwcpool.partyvibe.com:8118"],
		["qwertycoin.sixpools.tk", "http://qwertycoin.sixpools.tk:8118"]
	]
};