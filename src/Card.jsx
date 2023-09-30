import './Card.css';
import React from "react";
import {useState} from 'react';

const Card = (getAns, input) =>{
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    }

    let bgColor = {backgroundColor: "lightblue"};
    if(input.diff == "easy"){
        bgColor = {backgroundColor: "greenyellow"};
    }else if(input.diff == "medium"){
        bgColor = {backgroundColor: "yellow"};
    }else if(input.diff == "hard"){
        bgColor = {backgroundColor: "red"};
    }

    let ans = input.back;
    let cardStyle = isFlipped ? {transform: 'rotateX(180deg)'} : {transform: 'rotateX(0deg)'};
    return(
            <div className = {input.front + input.back}>
            <div className="flip-card" onClick = {flipCard}>
                <div className="flip-card-inner" style={cardStyle}>
                    <div className="flip-card-front" style = {bgColor}>
                        <p className = "flip-card-input">{input.front}</p>
                    </div>
                    <div className="flip-card-back" style = {bgColor}>
                        <p className = "flip-card-input">{input.back}</p>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Card;