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
    card: [],
  };

  cardDeck = () => {
    const deck = ["Red Joker", "Black Joker"];

    for (let i = 0; i < this.state.suits.length; i++) {
      for (let j = 0; j < this.state.ranks.length; j++) {
        deck.push(
          <img
            src={require(`./images/${this.state.ranks[j].value}-${this.state.suits[i]}.png`)}
            alt={
              this.state.ranks[j].rank + " " + "of" + " " + this.state.suits[i]
            }
          />
        );
      }
    }
    return deck;
  };

  drawCard = () => {
    const randomCard =
      this.cardDeck()[Math.floor(Math.random() * this.cardDeck().length)];
    return this.setState({ card: randomCard });
  };

  render() {
    return (
      <div>
        <div className="empty"></div>
        <div className="faceDown1"></div>
        <div className="faceDown2"></div>
        <div className="empty"></div>
        <button className="faceDown4" onClick={() => this.drawCard()}></button>
        <div className="faceDown5">{this.state.card}</div>
      </div>
    );
  }
}

export default Card;
