const hre = require("hardhat");
const NetworkStateModule = require("../ignition/modules/NetworkState.js");
const USATokenModule = require("../ignition/modules/USAToken.js");

async function main() {
    /* Token Creation Skipped for V2 Depployment */
    // // Deploy USA Token
    // const {token} = await hre.ignition.deploy(USATokenModule);

    // // Fetch the Token Address
    // const contractAddress = await token.getAddress();
    // console.log(`USA Token deployed: ${contractAddress}`);

    // Use The Existing Token Address From V1 Deployment
    const contractAddress = '0x2EF308295579A58E1B95cD045B7af2f9ec7931f8'

    if(contractAddress) {
        // Deploy Network State Contract
        const {networkState} = await hre.ignition.deploy(NetworkStateModule, {
            parameters: {NetworkStateModule: {contractAddress}}
        });
        console.log(`Network State Contract deployed: ${await networkState.getAddress()}`);
    }else{
        console.log("USA Token not found!");
    }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error);
      process.exit(1);
  });


// Deployment:
// npx hardhat run scripts/deploy.js --network seiTestnet

// Contract Verify:
// npx hardhat verify --network seiTestnet 0x04A951420393160617BfBF0017464E256d4C4468 0x2EF308295579A58E1B95cD045B7af2f9ec7931f8

// Deployments:
// USA Token deployed: 0x2EF308295579A58E1B95cD045B7af2f9ec7931f8

// NetworkState: 0x04A951420393160617BfBF0017464E256d4C4468
// https://seitrace.com/?chain=atlantic-2