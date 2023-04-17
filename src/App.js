import "./App.css";
import CardItem from "./cards/CardItem";
import Card from "./cards/card";
import Deck from "./cards/deck";
import Player from "./cards/player";
import { useState } from "react";

const CARDS_LIST = [
  // {
  //   ID: 0,
  //   name: BlackJoker,
  //   image: newImage,
  // },
  // {
  //   ID: 1,
  //   name: RedJoker,
  // },
];

function App() {
  function CallBack2(SolidCard) {
    return SolidCard;
  }

  return (
    <div className="demo">
      <CardItem handleCard={CallBack2} />
      {/* <h6>{CARDS_LIST[0]}</h6> */}
      {/* <Card></Card>
      <Player></Player> */}
    </div>
  );
}

export default App;
