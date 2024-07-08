// require("@nomiclabs/hardhat-ethers");
// require("dotenv").config();

// export const solidity = "0.8.0";
// export const networks = {
//   rinkeby: {
//     url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
//     accounts: [`0x${process.env.PRIVATE_KEY}`]
//   },
//   mainnet: {
//     url: `https://mainnet.infura.io/v3/${process.env.b724e4c39975463fa4a332de025f9df7}`,
//     accounts: [`0x${process.env.ppa8FlTK84IyN+JpmstGnJrcNUPUP/E3hxh1INhJSBP6AtAiuGG+WA}`]
//   }
//   // Add other networks if needed
// };

require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.b724e4c39975463fa4a332de025f9df7}`,
    accounts: [`0x${process.env.ppa8FlTK84IyN+JpmstGnJrcNUPUP/E3hxh1INhJSBP6AtAiuGG+WA}`]
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
