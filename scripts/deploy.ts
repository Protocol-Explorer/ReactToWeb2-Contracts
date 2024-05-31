import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.getContractFactory("ReactToWeb3");
  const reactToWeb3 = await contract.deploy();

  console.log("ReactToWeb3Contract Coin deployed to:", reactToWeb3.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});