import React, { Component } from 'react';
import '../Stylesheets/Landing.css';
import '../Stylesheets/Hover.css'; //credit to Hover.js ---> http://ianlunn.github.io/Hover/
import LightRay from '../Components/LightRay';

export default class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dActive: false,
      iActive: false,
      showMessage: false, 
      hasShoes: false,
      currentCoins: 1, 
    }
  }

  addActiveLetters = (evt) => {
    const letter = evt.target.id;
    letter === 'letter_d' ? this.setState({ dActive: true }) : this.setState({ iActive: true });
  }
  
  render() {
    let classNameStrD = `text-animation ${!this.state.dActive ? 'faulty-text-d hvr-wobble-bottom' : 'properly-placed-d'}`;
    let classNameStrI = `text-animation ${!this.state.iActive ? 'faulty-text-i hvr-wobble-bottom' : 'properly-placed-i'}`;
    let { showMessage, currentCoins } = this.state; 

    let bothActive = this.state.dActive && this.state.iActive;

    classNameStrD = bothActive ? `correct-text text-animation enlarge-text` : classNameStrD;
    classNameStrI = bothActive ? `correct-text text-animation enlarge-text lean-bottom` : classNameStrI;

    return (
      <div className={bothActive ? 'cover-photo-container shoes-on' : 'shoes-on'}>
          <div className={ `score-tracker ${!bothActive ? 'score-invisible' : '' }`}> Wallet: ${currentCoins}</div>
          <div className="rad-sun-container">
            <div className={bothActive ? 'rad-sun' : ''}></div>
            <div className='rad-sun-text'>{bothActive ? 'Rad job, sport Mind if I h ide out here for a bit?' : ''}</div>
            <LightRay ref={ref => (this.lightray = ref)} active={ bothActive }/>
          </div>
        <div className={`cover-banner ${bothActive ? 'background-shows' : ''}`}>
          <div className='text-container'>
            <span id='letter_d' onClick={this.addActiveLetters} className={classNameStrD} >D</span>
            <span className={bothActive ? 'aniel-text enlarge-text' : 'aniel-text'} >aniel</span>
            <span id='letter_i' onClick={this.addActiveLetters} className={classNameStrI} >I</span>
            <span className={bothActive ? 'enlarge-text lean-bottom' : ''} >m</span>
          </div>
        </div>
        <div className="banner-div">
              Salutations web traveler. 
              <br></br> 
              Please leave your shoes by the door.
              <br></br>
              { showMessage ? <div className="no-shoes">Hmm...No shoes? No service.</div> : ''}
              </div>
        <div className="door" onMouseOver={this.checkForShoes} onMouseLeave={this.hideMessage}></div>
      </div>
    )
  }
}
