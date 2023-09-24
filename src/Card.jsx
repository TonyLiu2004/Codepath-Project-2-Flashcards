import './Card.css';
import React from "react";
import {useState} from 'react';

const Card = (input) =>{
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    }

    let cardStyle = isFlipped ? {transform: 'rotateX(180deg)'} : {transform: 'rotateX(0deg)'};
    return(
            <div className = {input.front + input.back + input.key}>
            <div className="flip-card" onClick = {flipCard}>
                <div className="flip-card-inner" style={cardStyle}>
                    <div className="flip-card-front">
                        <p className = "flip-card-input">{input.front}</p>
                    </div>
                    <div className="flip-card-back">
                        <p className = "flip-card-input">{input.back}</p>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Card;