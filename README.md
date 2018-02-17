# qwertycoin-blockchain-explorer
Block explorer for Qwertycoin CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon qwertycoind. It should be accessible from the Internet. Run Qwertycoin with open port as follows:
```bash
./qwertycoind --restricted-rpc --enable-cors=* --enable-blockchain-indexes --rpc-bind-ip=0.0.0.0 --rpc-bind-port=1897
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.
