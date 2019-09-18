import React, { Component } from 'react';
import '../Stylesheets/Door.css';
import RedDoor from '../img/reddoor.png';

export default class Door extends Component {
  render() {
    return (
      <div>
        <div className="banner-div">
          Salutations web traveler.
              <br></br>
          Please leave your shoes by the door.
      </div>
      <img className="red-door" src={RedDoor} />
      </div>
    )
  }
}
