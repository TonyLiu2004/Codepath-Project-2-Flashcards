import './App.css';
import Card from './card.jsx';
import {useState} from 'react';

const App = () => {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${userInput}`);
  }

  const cards = [<Card front = "Hola" back = "Hello" key="1" diff = "easy"></Card>,
                 <Card front = "Buenos días" back = "Good Morning" key="2"  diff = "medium"></Card>,
                 <Card front = "Cómo estás" back = "How are you" key="3" diff = "medium"></Card>,
                 <Card front = "Qué tal" back = "How's it going" key="4" diff = "medium"></Card>,
                 <Card front = "Hasta luego" back = "See you later" key="5" diff = "hard"></Card>,
                 <Card front = "Cómo te llamas" back = "What is your name" key="6" diff = "hard"></Card>,
                 <Card front = "De dónde eres" back = "Where are you from" key="7" diff = "hard"></Card>,
                 <Card front = "Por favor" back = "Please" key="8" diff = "medium"></Card>,
                 <Card front = "Gracias" back = "Thanks" key="9" diff = "easy"></Card>,
                 <Card front = "Cuaderno" back = "Notebook" key="10" diff = "medium"></Card>,
                 <Card front = "Lapiz" back = "Pencil" key="11" diff = "easy"></Card>,
                 <Card front = "Estudiante" back = "Student" key="12" diff = "easy"></Card>,
                ];
  
  let displayCards =[0,1,2,3,4,5,6,7,8,9,10,11];
  let shuffle = () =>{
    let nums = [0,1,2,3,4,5,6,7,8,9,10,11];
    for(let i = 0;i < cards.length;i++){
      let r = Math.floor(Math.random() * nums.length);
      displayCards[i] = nums[r];
      nums[r] = nums[nums.length-1];
      nums.pop();
    }
  }

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
      <form onSubmit={handleSubmit}>
        <label>Guess the Answer:&nbsp;
          <input
            type="text" 
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </label>
        <input type="submit" style={{ marginTop: '10px', marginLeft:'10px' }}/>
      </form> <br/>

      <button className = "next-card" onClick = {changeCard}>Next Card</button>
    </div>
    
  )
}

export default App