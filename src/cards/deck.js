import React, { Component } from "react";
import { useState } from "react";
import Card from "./card";

// const jokersHandler = (props) => {
//   const [image, newImage] = useState(CARDS_LIST[0]);
// };

function Deck(props) {
  const [suits, setSuits] = useState(["Clubs", "Diamonds", "Hearts", "Spades"]);
  const [ranks, setRanks] = useState([
    "Ace",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Jack",
    "Queen",
    "King",
  ]);

  function CardDeck2() {
    const cardList = [];
    for (let suit in suits) {
      for (let rank in ranks) {
        cardList.push({
          suitAndRank: [ranks[rank], suits[suit]],
        });
      }
    }
    return cardList;
  }

  function ShuffleDeck() {
    const shuffledDeck = [];
    let randomCard;
    let sD = CardDeck2().map((cards) => <div>{cards.suitAndRank}</div>);
    for (let i = 0; i < sD.length; i++) {
      randomCard = Math.floor(Math.random() * sD.length);
      let temp = sD[i];
      sD[i] = sD[randomCard];
      sD[randomCard] = temp;
    }
    shuffledDeck.push(sD);
    return sD[randomCard];
  }
  function DrawCard() {
    const randomCard =
      CardDeck2()[Math.floor(Math.random() * this.CardDeck2().length)];
    return randomCard;
  }
  // const cardDeck = () => {
  //   for (let i = 0; i < this.suits.length; i++) {
  //     for (let j = 0; j < this.ranks.length; j++)
  //       for (let k = 0; k < this.ranks.length; k++) {
  //         cardList.add({
  //           ID: this.k,
  //           rankValue: this.ranks[i],
  //           suitValue: this.suits[j],
  //         });

  // <img
  //   src={require(`./images/${this.state.ranks[j].value}-${this.state.suits[i]}.png`)}
  //   alt={this.state.ranks[j].rank + " of " + this.state.suits[i]}
  // />
  //     }
  // }

  // deck.push(
  //   <img src={require(`./images/jokerBlack.png`)} alt={"Black Joker"} />
  // );
  // deck.push(<img src={require(`./images/jokerRed.png`)} alt={"Red Joker"} />);
  // return deck;
  // };
  // const cardListRender = cardList.map((cards) => {
  //   <li key={cards.k}>
  //     <h2>{cards.rankValue}</h2>
  //     <h2>{cards.suitValue}</h2>
  //   </li>;
  // });
  return <div>{props.handleCallBack(ShuffleDeck())}</div>;
}

export default Deck;
