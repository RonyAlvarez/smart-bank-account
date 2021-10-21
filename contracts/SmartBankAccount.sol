pragma solidity >=0.4.22 <0.9.0;

contract SmartBankAccount {
    uint test = 123;
    mapping(address => uint) balances;
    
    constructor() public {}

    event GetBalance(
        address sender,
        uint balance
    );

    event Deposit(
        address sender,
        uint totalContractBalance
    );

    function testContract() public view returns (uint) {
        return test;
    }

    function deposit() public payable {
        balances[msg.sender] = msg.value;
        // emit Deposit(msg.sender, totalContractBalance);
    }

    function getBalance() public view returns (uint256) {
        uint balance = balances[msg.sender];
        // emit GetBalance(userAdress, balance);
        return balance;
    }
}
