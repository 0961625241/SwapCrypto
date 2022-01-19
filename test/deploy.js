const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");
describe("deploy", function () {
  it("My token swapper testing", async function () {
    const Token = await hre.ethers.getContractFactory("Token");
    const token = await Token.deploy();
    const name = await token.name();
    console.log(name)
      console.log("address token:",token.address);
    let balance = await  token.balanceOf("0x09Ef1D2728fdAdFc3c78E65d8b154aB423d02D2C");
    console.log(balance)
      
    const EthSwap = await hre.ethers.getContractFactory("EthSwap");
    const ethSwap = await EthSwap.deploy(token.address);
  //   await token.transfer(ethswap.address, '1000000000000000000000000')
  console.log("address ethswap:",ethSwap.address);
 await token.transfer(ethSwap.address, '1000000000000000000000000')
    console.log("deploy here",qua);
  });
});
