async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const NextGemToken = await ethers.getContractFactory("NextGemAiToken");
    const nextGemToken = await NextGemToken.deploy("850000000000000000000000000"); //850M tokens
  
    console.log("Token address:", nextGemToken.address);
}
  
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});