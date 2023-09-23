import './App.css';
import Card from './card.jsx';
import {useState} from 'react';

const App = () => {

  let flipped = false;
  const handleCallback = (childData) => {
    flipped = childData;
    console.log(flipped);
  }

  const cards = [<Card front = "1" back = "1back" parentCallback={handleCallback}></Card>,<Card front = "2" back = "2back" parentCallback={handleCallback}></Card>];
  const [display_cards, setCard] = useState(cards[0]);
  const changeCard = () => {
    const r =Math.floor(Math.random() * cards.length);
    setCard(cards[r]);
  }

  
  
  return (
    <div className="main">
      <h1>Spanish Flashcards!</h1>
      <h3>How good are you at Spanish? Test your knowledge of Spanish vocabulary here!</h3>
      <p>Number of cards: </p>

      <div className = "cardContainer">
        {display_cards}
      </div>
      <button onClick = {changeCard}>Next Card</button>
    </div>
    
  )
}

export default App
