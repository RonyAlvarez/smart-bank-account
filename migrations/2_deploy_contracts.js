var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var SmartBankAccount = artifacts.require("./SmartBankAccount.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(SmartBankAccount);
};