import React, { Component } from "react";
import Card from "./card";

class CardDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.CardDeck(),
      cardsRemaining: 52,
    };
  }

  CardDeck = () => {
    const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    const ranks = [
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
      { rank: "Jack", value: 11 },
      { rank: "Queen", value: 12 },
      { rank: "King", value: 13 },
    ];

    const deck = [];

    for (let i = 0; i++; i < suits.length) {
      for (let j = 0; j++; j < ranks.length) {
        const card = {
          value: ranks[j].value,
          suit: suits[i],
          rank: `${ranks[j].rank} of ${suits[i]}`,
          image: (
            <img
              src={`./images${this.value}-${this.suit}.png`}
              alt="Image not found"
            />
          ),
        };
        deck.push(card);
      }
    }
    return deck;
  };

  drawCard = () => {
    const { cards } = this.state;
    const index = Math.floor(Math.random() * cards.length);
    const card = cards[index];
    const newCards = cards.filter((_, i) => i !== index);

    cardsRemainingMethod = () => {
      const cc = [...cardsRemaining];
      const remaining = 0;
      while (cc !== 0) {
        remaining = cc - 1;
      }
      return remaining;
    };

    this.setState((prevState) => ({
      cards: newCards,
      cardsRemaining: this.remaining,
    }));
  };

  render() {
    const { cardsRemaining, cards } = this.state;
    return (
      <div>
        <div>Cards remaining: {cardsRemaining}</div>
        <button onClick={this.drawCard}>Draw a card</button>
        {cards.map((card) => {
          return card;
        })}
      </div>
    );
  }
}

export default CardDeck;
