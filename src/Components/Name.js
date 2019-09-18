import React, { Component } from 'react';
import '../Stylesheets/Hover.css'; //credit to Hover.js ---> http://ianlunn.github.io/Hover/
import '../Stylesheets/Name.css';

export default class Name extends Component {

  render() {

    let { addActiveLetters } = this.props; 

    let classNameStrD = `text-animation ${!this.props.dActive ? 'faulty-text-d hvr-wobble-bottom' : 'properly-placed-d'}`;
    let classNameStrI = `text-animation ${!this.props.iActive ? 'faulty-text-i hvr-wobble-bottom' : 'properly-placed-i'}`;

    let bothActive = this.props.dActive && this.props.iActive;

    classNameStrD = bothActive ? `correct-text text-animation enlarge-text` : classNameStrD;
    classNameStrI = bothActive ? `correct-text text-animation enlarge-text` : classNameStrI;

    return (
      <div className={`cover-banner ${bothActive ? 'background-shows' : ''}`}>
        <div className='text-container'>
          <span onClick={() => addActiveLetters('letter_d') } className={classNameStrD} >D</span>
          <span className={bothActive ? 'aniel-text enlarge-text' : 'aniel-text'} >aniel</span>
          <span onClick={() => addActiveLetters('letter_i') } className={classNameStrI} >I</span>
          <span className={bothActive ? 'enlarge-text lean-bottom' : ''} >m</span>
        </div>
      </div>
    )
  }
}
