import './Card.css';
import React from "react";
import {useState} from 'react';

const Card = (inputs) =>{
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    }

    let onTrigger = () => {
        // Call the parent callback function
        inputs.parentCallback(!isFlipped);
    }
    if(inputs.flip){
        flipCard;
    }

    let cardStyle = isFlipped ? {transform: 'rotateX(180deg)'} : {transform: 'rotateX(0deg)'};
    return(
            <div className = {inputs.front + inputs.back}>
            <div className="flip-card" onClick = {() => { flipCard(); onTrigger(); }}>
                <div className="flip-card-inner" style={cardStyle}>
                    <div className="flip-card-front">
                        <p className = "flip-card-input">{inputs.front}</p>
                    </div>
                    <div className="flip-card-back">
                        <p className = "flip-card-input">{inputs.back}</p>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Card;