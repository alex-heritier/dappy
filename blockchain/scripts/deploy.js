const fs = require('fs');

async function main() {

    const DappyContract = await ethers.getContractFactory("Dappy");
    const dappy = await DappyContract.deploy();
    await dappy.deployed();
    console.log("The Dappy Contract was deployed to: " + dappy.address);

    const TokenContract = await ethers.getContractFactory("Token");
    const token = await TokenContract.deploy(dappy.address);
    await token.deployed();
    console.log("The Token Contract was deployed to: " + token.address);

    // Create the environment file with the smart contract addresses
    let addresses = {dappycontract: dappy.address, tokencontract: token.address};
    let addressesJSON = JSON.stringify(addresses);
    fs.writeFileSync("environment/contract-address.json", addressesJSON);

}

main()
.then(()=>{
    process.exit(0);
}).catch((error)=> {
    console.error(error);
    process.exit(1);
})