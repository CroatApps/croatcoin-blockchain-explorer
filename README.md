# croatcoin-blockchain-explorer
Block explorer for Croatcoin CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon croatd. It should be accessible from the Internet. Run Croatcoin with open port as follows:
```bash
./croatd --restricted-rpc --enable-cors=* --enable-blockchain-indexes --rpc-bind-ip=0.0.0.0 --rpc-bind-port=8197
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.
