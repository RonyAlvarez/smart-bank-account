import { Button } from '@mui/material';
import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

export class AccountBalance extends Component {
    render() {
        return (
            <div>
                <h4 style={balanceText}>Balance</h4>
                <NumberFormat
                    value={this.props.accountBalance}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'€'}
                    fixedDecimalScale
                    decimalScale={2}
                    style={accountBalanceText} />
                <Button
                    style={topUpButton} >
                    Top Up
                </Button>
            </div>
        )
    }
}

const balanceText = {
    paddingLeft: '3%',
    paddingTop: '5%',
    marginBottom: '0%',
    fontWeight: '200',
}

const accountBalanceText = {
    display: 'block',
    paddingLeft: '3%',
    fontSize: '5rem',
    lineHeight: '1.2em'
}

const topUpButton = {
    borderRadius: '25px',
    backgroundColor: 'black',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '10px 20px 10px',

    marginTop: '10%'
}

export default AccountBalance
