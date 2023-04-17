import "./card.css";
import CardItem from "./CardItem";

const Card = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <CardItem key={item.id} item={item} onNewClick={props.onNewClick} />
      ))}
    </ul>
  );

  // const rank = props.
  //  јас сум карта, јас сум глупа и сум кликната

  // const BlackJoker = () => {
  //   <img src={require(`./images/jokerBlack.png`)} alt={"Black Joker"} />;
  //   return newImage(img);
  // };

  // state = {
  //   suits: ["Clubs", "Diamonds", "Hearts", "Spades"],
  //   ranks: [
  //     { rank: "Ace", value: 1 },
  //     { rank: "Two", value: 2 },
  //     { rank: "Three", value: 3 },
  //     { rank: "Four", value: 4 },
  //     { rank: "Five", value: 5 },
  //     { rank: "Six", value: 6 },
  //     { rank: "Seven", value: 7 },
  //     { rank: "Eight", value: 8 },
  //     { rank: "Nine", value: 9 },
  //     { rank: "Ten", value: 10 },
  //     { rank: "Jack", value: 12 },
  //     { rank: "Queen", value: 13 },
  //     { rank: "King", value: 14 },
  //   ],
  //   shuffledDeck: [],
  //   card: null,
  //   i:0
  // };

  // cardDeck = () => {
  //   let deck = [];

  //   for (let i=0; i<this.state.suits.length; i++) {
  //     for (let j=0; j<this.state.ranks.length; j++) {
  //       deck.push(
  //         <img
  //           src={require(`./images/${this.state.ranks[j].value}-${this.state.suits[i]}.png`)}
  //           alt={this.state.ranks[j].rank + " of " + this.state.suits[i]}
  //         />
  //       );
  //     }
  //   }
  //   deck.push(
  //     <img
  //       src={require(`./images/jokerBlack.png`)}
  //       alt={"Black Joker"}
  //     />
  //   );
  //   deck.push(
  //     <img
  //       src={require(`./images/jokerRed.png`)}
  //       alt={"Red Joker"}
  //     />
  //   );
  //   return deck;
  // };

  // shuffleDeck = () => {
  //   let randomCard;
  //   let sD = this.cardDeck();
  //   for (let i = 0; i < sD.length; i++) {
  //     randomCard = Math.floor(Math.random() * sD.length);
  //     let temp = sD[i];
  //     sD[i] = sD[randomCard];
  //     sD[randomCard] = temp;
  //   }
  //   this.setState({ shuffledDeck: sD });
  // };

  // componentDidMount() {
  //   window.addEventListener('load', this.shuffleDeck);
  // };

  // drawCard = () => {
  //   let cD = this.state.shuffledDeck;
  //   let nextCard = cD[this.state.i];
  //   this.increment();
  //   return this.setState({ card: nextCard });
  // };

  // increment = () => {
  //   this.state.i++;
  // };

  // return (
  //   <div>
  //     <div className="inLine">
  //       <div className="empty"></div>
  //       {this.state.i < 53 ? (
  //         <div className="faceDown0"></div>
  //       ) : (
  //         <div className="empty"></div>
  //       )}
  //       {this.state.i < 54 ? (
  //         <div className="faceDown" onClick={() => this.drawCard()}></div>
  //       ) : (
  //         <div className="empty"></div>
  //       )}
  //     </div>
  //     <div className="inLine">
  //       <div className="empty"></div>
  //       <div className="faceUp">{this.state.card}</div>
  //     </div>
  //   </div>
  // );
};

export default Card;
