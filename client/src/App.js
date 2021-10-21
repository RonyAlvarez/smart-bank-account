import React, { Component } from "react";
import SmartBankAccount from "./contracts/SmartBankAccount.json";
import getWeb3 from "./getWeb3";
import "./App.css";
import Header from "./components/Header";
import AccountBalance from "./components/AccountBalance";

class App extends Component {
  state = { accountBalance: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      console.log(accounts)

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();

      // const deployedNetwork = SimpleStorageContract.networks[networkId];
      const deployedNetwork = SmartBankAccount.networks[networkId];
      const instance = new web3.eth.Contract(
        SmartBankAccount.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.getBalance);
      console.log(this.state.accountBalance);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  getBalance = async () => {
    // const { accounts, contract } = this.state;
    const { contract } = this.state;

    // Get the value from the contract
    const response = await contract.methods.getBalance().call();

    // Update state with the result.
    this.setState({ accountBalance: response });
  }

  topUp = async () => {
    const { contract } = this.state;
    await contract.methods.deposit().send({ from: this.state.accounts[0], value: 32000000 })
    const newBalance = this.getBalance()
    this.setState({ accountBalance: newBalance });
    console.log("New Account Balance =>",  this.state.accountBalance)
  }

  // runExample = async () => {
  //   const { accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   await contract.methods.set(5).send({ from: accounts[0] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await contract.methods.get().call();

  //   // Update state with the result.
  //   this.setState({ storageValue: response });
  // };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <React.Fragment>
        {/* <CssBaseline /> */}
        <div className="App">
          <Header />
          <AccountBalance
            accountBalance={this.state.accountBalance}
            topUp={this.topUp} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
