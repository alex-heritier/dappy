/**
* @type import("hardhat/config").HardhatUserConfig
*/

require("@nomiclabs/hardhat-waffle");

const secretMain = require("./environment/secrets-polymain.json");
const secretMumbai = require("./environment/secrets-polymumbai.json");

module.exports = {
  solidity: "0.8.4",
  paths: {
    sources: "./blockchain/contracts",
    tests: "./blockchain/test",
    cache: "./blockchain/cache",
    artifacts: "./blockchain/artifacts",
  },
  networks: {
    polymumbai: {
      url: secretMumbai.node,
      accounts: [secretMumbai.privatekey],
    },
    polymain: {
      url: secretMain.node,
      accounts: [secretMain.privatekey],
    }
  }
};
