import React, { Component } from 'react';
import '../Stylesheets/Wallet.css';

export default class Wallet extends Component {
  render() {

    let { dActive, iActive, walletBalance } = this.props; 

    return (
       dActive && iActive ? <div className="wallet-modal">
        ${ walletBalance }
      </div> : ''
    )
  }
}
