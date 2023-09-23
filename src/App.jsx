import './App.css';
import Card from './card.jsx';
import {useState} from 'react';

const App = () => {

  const cards = [<Card front = "1" back = "1back"></Card>,
                 <Card front = "2" back = "2back"></Card>
                ];
  const [displayCardIndex, setCardIndex] = useState(0);
    
  const changeCard = () => {
    const r =Math.floor(Math.random() * cards.length);
    setCardIndex(r);
  }

  
  return (
    <div className="main">
      <h1>Spanish Flashcards!</h1>
      <h3>How good are you at Spanish? Test your knowledge of Spanish vocabulary here!</h3>
      <p>Number of cards: {cards.length}</p>

      <div className = "cardContainer">
        {cards[displayCardIndex]}
      </div>
      <button onClick = {changeCard}>Next Card</button>
    </div>
    
  )
}

export default App
