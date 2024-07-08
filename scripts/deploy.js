async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const BRBBootcampToken = await ethers.getContractFactory("BRBBootcampToken");
    const token = await BRBBootcampToken.deploy(1000000); // 1 million tokens

    console.log("BRBBootcampToken deployed to:", token.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
