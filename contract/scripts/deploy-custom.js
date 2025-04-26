const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  console.log("Deploying contracts with the account:", (await ethers.getSigners())[0].address);

  // Use The Existing Token Address From V1 Deployment
  const existingTokenAddress = '0x2EF308295579A58E1B95cD045B7af2f9ec7931f8';
  console.log("Using existing USA Token:", existingTokenAddress);

  // Deploy Network State Contract
  const NetworkState = await ethers.getContractFactory("NetworkState");
  const networkState = await NetworkState.deploy(existingTokenAddress, {
    gasPrice: ethers.parseUnits("1", "gwei"),
  });

  await networkState.waitForDeployment();
  const networkStateAddress = await networkState.getAddress();
  console.log("Network State Contract deployed to:", networkStateAddress);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

// Deployment:
// npx hardhat run scripts/deploy-custom.js --network seiTestnet