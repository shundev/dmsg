var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_key = "B3hd1WhDtDSLkfVBMRtl";
var mnemonic = "swallow cinnamon brother pyramid win panda pull appear spin federal wine door";
module.exports = {
  networks: {
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
