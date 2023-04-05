import "./App.css";
import Card from "./cards/card";
import Deck from "./cards/deck";
import React, { Component } from "react";

function App() {
  return (
    <div className="demo">
        <Card></Card>
        <Deck></Deck>
    </div>
  );
}

export default App;