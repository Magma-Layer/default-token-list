const { version } = require("../package.json");
const mainnet = require("./tokens/mainnet.json");
const polygon = require("./tokens/polygon.json");
const mumbai = require("./tokens/mumbai.json");
const optimism = require("./tokens/optimism.json");
const celo = require("./tokens/celo.json");
const arbitrum = require("./tokens/arbitrum.json");
const bnb = require("./tokens/bnb.json");
const sepolia = require("./tokens/sepolia.json");
const avalanche = require("./tokens/avalanche.json");
const base = require("./tokens/base.json");
const magmasepolia = require("./tokens/magmasepolia.json");
const berachaintestnet = require("./tokens/berachaintestnet.json");


const bridgeUtils = require('@uniswap/token-list-bridge-utils');

module.exports = function buildList() {
  const parsed = version.split(".");
  const l1List = {
    name: "MagmaLayer Default",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://magma-info.vercel.app/static/media/magma.a9a6e47966e3473897f04dd95919c760.svg",
    keywords: ["magmalayer", "default"],
    tokens: [
      ...mainnet,
      ...polygon,
      ...mumbai,
      ...optimism,
      ...celo,
      ...arbitrum,
      ...bnb,
      ...sepolia,
      ...avalanche,
      ...base,
      ...berachaintestnet,
      ...magmasepolia
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
  return bridgeUtils.chainify(l1List);
};
