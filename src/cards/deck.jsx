import React, { Component } from "react";

class CardDeck extends Component {
  state = {
    cards: this.CardDeck(),
    cardsRemaining: 52,
  };

  CardDeck = () => {
    const suits = ["clubs", "diamonds", "hearts", "spades"];
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
    const newCards = cards.filter((_, i) => i != index);

    this.setState((prevState) => ({
      cards: newCards,
      cardsRemaining: prevState - 1,
    }));
  };

  render() {}
}

export default CardDeck;
