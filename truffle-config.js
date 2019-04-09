// Do not forget to install truffle-hdwallet-provider
// Run the following command inside your project directory.
// > npm install truffle-hdwallet-provider
var HDWalletProvider = require("truffle-hdwallet-provider");

// Place your own mnemonic here
var mnemonic = "<YOUR 12 WORD MNEMONIC HERE>";
// Place your own infura endpoint URL here
var infura_endpoint = "https://ropsten.infura.io/v3/<YOUR INFURA ENDPOINT HERE>"

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },

        ropsten: {
            provider: function() {
                return new HDWalletProvider(mnemonic, infura_endpoint)
            },
            network_id: 3
        }
    }
};
