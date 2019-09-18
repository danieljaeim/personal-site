import React, { Component } from 'react';
import '../Stylesheets/Carousel.css';
import Typist from 'react-typist';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsList: ['words', 'prose', 'arcs', 'humanity', 'worlds', 'imps', 'cogs', 'magic', 'coffee', 'passion'],
      soundsList: ['sound', 'music', 'dialogue', 'desire', 'layers', 'orcs', 'gears', 'machines', 'tea', 'curiosity']
    }
  }

  render() {
    let { wordsList, soundsList } = this.state; 

    let wordsArr = wordsList.map((word, i) => 
        <span key={word}>
          <span style={{ 'fontSize': `${30 - word.length}px` }}> {word} </span>
          {i !== wordsList.length - 1 ? <Typist.Backspace count={word.length + 1} delay={word.length * 600} /> : ''}
        </span>
      );

    let soundsArr = soundsList.map((word, i) => 
      <span key={word}>
        <span style={{ 'fontSize': `${30 - word.length}px` }}> {word} </span>
        {i !== soundsList.length - 1 ? <Typist.Backspace count={word.length + 1} delay={word.length * 600} /> : ''}
      </span>
    );  

    return (
      <div>
        <div>
          <div className="background-image">
            <div className="quote-banner">
                <h3> An aspiring game developer passionate for storytelling through &nbsp;
                  <Typist className="type-text"cursor={{show: false}} >
                    {wordsArr}
                  </Typist>
                  &nbsp; and &nbsp;
                  <Typist cursor={{show: false}} >
                    {soundsArr}
                  </Typist>
                </h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
