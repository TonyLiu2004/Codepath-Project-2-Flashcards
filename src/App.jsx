import './App.css';
import Card from './card.jsx';
import {useState} from 'react';

const App = () => {

  const cards = [<Card front = "Buenos días" back = "Good Morning" key="1" ></Card>,
                 <Card front = "Hola" back = "Hello" key="2"></Card>,
                 <Card front = "Cómo estás" back = "3back How are you" key="3"></Card>,
                 <Card front = "Qué tal" back = "How's it going" key="4" ></Card>,
                 <Card front = "Hasta luego" back = "See you later" key="5"></Card>,
                 <Card front = "Cómo te llamas" back = "What is your name" key="6"></Card>,
                 <Card front = "De dónde eres" back = "Where are you from" key="7" ></Card>,
                 <Card front = "Por favor" back = "Please" key="8"></Card>,
                 <Card front = "Gracias" back = "Thanks" key="9"></Card>,
                 <Card front = "Cuaderno" back = "Notebook" key="10" ></Card>,
                 <Card front = "Lapiz" back = "Pencil" key="11"></Card>,
                 <Card front = "Estudiante" back = "Student" key="12"></Card>,
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