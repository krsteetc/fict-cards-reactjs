import React, { Component } from "react";
import Card from "./card";


class Deck extends Component {
  
  state = {
      cardsRemaining: 54
  };

  render() {
    return (
      <div> 
        <h5>Cards remaining: {this.state.cardsRemaining}</h5>
      </div>
    );
  }
}

export default Deck;