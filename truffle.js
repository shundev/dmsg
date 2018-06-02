var HDWalletProvider = require("truffle-hdwallet-provider")
var infura_key = process.env.INFURA_KEY
var mnemonic = process.env.MNEMONIC
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_key),
      network_id: "*",
      gas: 4000000
    },
    mainnet: {
      provider: new HDWalletProvider(mnemonic, "https://mainnet.infura.io/" + infura_key),
      network_id: "*",
      gas: 4000000
    }
  }
};
