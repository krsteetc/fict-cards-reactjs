import React from "react";
import Deck from "./deck";
import "./card.css";
import { useState } from "react";

const CardItem = (props) => {
  const [singleCardd, setSingleCard] = useState("");

  function CallBack(singleCard) {
    // setSingleCard(() => singleCard);
    return singleCard;
  }

  function imageHandler() {
    const name = { setSingleCard };
    const theCard = (
      <div className="faceUp">
        <img src={require(`./images/${name}.png`)} alt={name} />
      </div>
    );
    return theCard;
  }

  return (
    <div>
      <Deck handleCallBack={CallBack} />
      {/* {props.handleCard(imageHandler())} */}
    </div>
  );
};

export default CardItem;
