import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.getContractFactory("ReactToWeb3");
  const reactToWeb3 = await contract.deploy();

  console.log("ReactToWeb3Contract Coin deployed to:", reactToWeb3.getAddress());

  const crowdFund = await ethers.getContractFactory("CrowdFund");
  const crowdFundContract = await crowdFund.deploy(reactToWeb3.getAddress());

  console.log("CrowdFund deployed to: ", crowdFundContract.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});