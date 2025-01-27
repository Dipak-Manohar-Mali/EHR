const { ethers } = require("hardhat");
async function main() {
  console.log("Deploying medical storage smart contract...");
  const Medical = await ethers.getContractFactory("MedicalStorage");
  const accounts = await ethers.getSigners();
  const medical = await Medical.connect(accounts[0]).deploy();
  // await medical.deploy();
  console.log("Contract deployed successfully:", medical);
  console.log(`MedicalStorage deployed at address ${medical.target}`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
