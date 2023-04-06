import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  state = {
    suits: ["Clubs", "Diamonds", "Hearts", "Spades"],
    ranks: [
      { rank: "Ace", value: 1 },
      { rank: "Two", value: 2 },
      { rank: "Three", value: 3 },
      { rank: "Four", value: 4 },
      { rank: "Five", value: 5 },
      { rank: "Six", value: 6 },
      { rank: "Seven", value: 7 },
      { rank: "Eight", value: 8 },
      { rank: "Nine", value: 9 },
      { rank: "Ten", value: 10 },
      { rank: "Jack", value: 12 },
      { rank: "Queen", value: 13 },
      { rank: "King", value: 14 },
    ],
    shuffledDeck: [],
    card: null
  };

  cardDeck = () => {
    let deck = [];

    for (let i=0; i<this.state.suits.length; i++) {
      for (let j=0; j<this.state.ranks.length; j++) {
        deck.push(
          <img
            src={require(`./images/${this.state.ranks[j].value}-${this.state.suits[i]}.png`)}
            alt={this.state.ranks[j].rank + " of " + this.state.suits[i]}
          />
        );
      }
    }
    deck.push(
      <img
        src={require(`./images/jokerBlack.png`)}
        alt={"Black Joker"}
      />
    );
    deck.push(
      <img
        src={require(`./images/jokerRed.png`)}
        alt={"Red Joker"}
      />
    );
    return deck;
  };

  shuffleDeck = () => {
    let randomCard;
    let sD = this.cardDeck();
    for(let i=0; i<sD.length; i++) {
      randomCard = Math.floor(Math.random() * sD.length);
      let temp=sD[i];
      sD[i]=sD[randomCard];
      sD[randomCard]=temp;
    }
    //return this.setState({ shuffledDeck: sD });
    return sD;
  };

  drawCard = () => {
    //let cD = this.state.shuffledDeck;
    let cD = this.shuffleDeck();
    let nextCard = cD[0];
    return this.setState({ card: nextCard });
  };

  render() {
    return (
      <div>
        <div className="inLine">
          <div className="empty"></div>
          <div className="faceDown" onClick={() => this.drawCard()}></div>
        </div>
        <div className="inLine">
          <div className="empty"></div>
          <div className="faceUp">{this.state.card}</div>
        </div>
      </div>
    );
  }
}

export default Card;