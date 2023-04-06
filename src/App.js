import "./App.css";
import Card from "./cards/card";
import Deck from "./cards/deck";
import React, { Component } from "react";
import Player from "./cards/player";

function App() {
  return (
    <div className="demo">
        <Card></Card>
        <Player></Player>
    </div>
  );
}

export default App;