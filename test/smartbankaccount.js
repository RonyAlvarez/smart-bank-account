const SmartBankAccount = artifacts.require("./SmartBankAccount.sol");

contract("SmartBankAccount", accounts => {
    it("...should test the access to the contract", async () => {
        const smartBankAccount = await SmartBankAccount.deployed();

        // Get stored value
        const storedData = await smartBankAccount.testContract.call();

        assert.equal(storedData, 123, "The account value is 123 ETH");
    });

    it("...should be able to add money to the contract", async () => {
        const smartBankAccount = await SmartBankAccount.deployed();
        result = await smartBankAccount.deposit({ from: "0x64B679197A4b68Bf868B66452089e2Fbd61CAD90", value: web3.utils.toWei('1', 'ether') })
        // const event = result.logs[0].args
        // console.log("New Contract Balance => ", event[1].toString())
    });

    it("...should get the account balance", async () => {
        const smartBankAccount = await SmartBankAccount.deployed();
        const accountBalance = await smartBankAccount.getBalance({ from: "0x64B679197A4b68Bf868B66452089e2Fbd61CAD90" }).then(function (bn) { return bn.toString() });
        console.log("Account Balance => ", accountBalance)
        assert.equal(accountBalance, 1000000000000000000, "The account value is 1 ETH");
    });
});