import React, { Component } from 'react';
import Carousel from '../Components/Carousel';
import Name from '../Components/Name';
import Wallet from '../Components/Wallet';
import Door from '../Components/Door';

export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dActive: false,
      iActive: false,
      walletBalance: 5
    }
  }

  earnMoney = (points) => {
    this.setState(st => ({ walletBalance: st.walletBalance + points }));
  }

  addActiveLetters = (letter) => {
    letter === 'letter_d' ? this.setState({ dActive: true }) : this.setState({ iActive: true });
  }

  render() {

    let { dActive, iActive, walletBalance } = this.state; 

    return(
      <div>
        <Name dActive={dActive}
              iActive={iActive}
              addActiveLetters={this.addActiveLetters}
              earnMoney={this.earnMoney} />
        <Carousel />
        <Wallet walletBalance={walletBalance}
                dActive={dActive}
                iActive={iActive} />
        <Door />
      </div>
    )
  }
}
