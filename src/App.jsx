import './App.css';
import Card from './card.jsx';
import {useState} from 'react';

const App = () => {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    var isCorrect = userInput.toLowerCase() == answer.toLowerCase();
    alert(`The name you entered was: ${userInput} and the correct answer is ${answer}, correct: ${isCorrect}, flipped: ${flipped}`);
  }
  
  let flipped = false;
  const handleCallback = (childData) => {
    flipped = childData;
  }; 

  const cards = [<Card parentCallback={handleCallback} front = "Hola" back = "Hello" key="1" diff = "easy"></Card>,
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
  const [displayCards, setdisplayCards] = useState([0,1,2,3,4,5,6,7,8,9,10,11]);
  let shuffle = () =>{
    for (let i = displayCards.length - 1; i > 0; i--) { 
      let r = Math.floor(Math.random() * (i + 1));  
      let temp = displayCards[i];
      displayCards[i] = displayCards[r];
      displayCards[r] = temp;
    }
    console.log(displayCards);
    console.log(displayCardIndex);
  }
  let [answer, setAnswer] = useState(cards[displayCards[0]].props.back);

  const [displayCardIndex, setCardIndex] = useState(0);
  const nextCard = () => {
    if(displayCardIndex < 11) {
      setCardIndex(displayCardIndex+1);
      setAnswer(cards[displayCards[displayCardIndex+1]].props.back);
    }
  }
  const prevCard = () => {
    if(displayCardIndex > 0) {
      setCardIndex(displayCardIndex-1); 
      setAnswer(cards[displayCards[displayCardIndex-1]].props.back);
    }
  }

  console.log(answer);
  return (
    <div className="main">
      <h1>Spanish Flashcards!</h1>
      <h3>How good are you at Spanish? Test your knowledge of Spanish vocabulary here!</h3>
      <p>Number of cards: {cards.length}</p>

      <div className = "cardContainer">
        {cards[displayCards[displayCardIndex]]}
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

      <div className = "card-button-container">
        <button className = "card-button" onClick = {prevCard}>◀</button>
        <button className = "card-button" onClick = {nextCard}>▶</button>
        <button className = "card-button" onClick = {shuffle}>Shuffle</button>
      </div>
    </div>
    
  )
}

export default App