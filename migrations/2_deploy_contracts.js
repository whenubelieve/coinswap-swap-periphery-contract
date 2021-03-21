const CoinSwapRouter = artifacts.require("CoinSwapRouter.sol");
const WBNB = artifacts.require("WBNB9.sol")

module.exports = async function (deployer, network) {
let wbnb;
const FACTORY_ADDRESS = '0x....' // CoinSwapFactory address 

if(network = 'testnet' || 'bsc') {
    wbnb = await WBNB.at('0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'); // WBNB address on BSC Testnet
} else {
    await deployer.deploy(WBNB);
    wbnb = await WBNB.deployed(); 
}

await deployer.deploy(CoinSwapRouter, FACTORY_ADDRESS, wbnb.adress);
};
