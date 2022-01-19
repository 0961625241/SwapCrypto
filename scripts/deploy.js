// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('address account:', deployer.address)
  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy();
  // let balance = await  token.balanceOf("0x09Ef1D2728fdAdFc3c78E65d8b154aB423d02D2C");
  // console.log(balance.toString())
  console.log("address token :", token.address);

  const EthSwap = await hre.ethers.getContractFactory("EthSwap");
  const ethSwap = await EthSwap.deploy(token.address);
  console.log("address ethswap:", ethSwap.address);

  await token.transfer(ethSwap.address, '1000000000000000000000000')


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
