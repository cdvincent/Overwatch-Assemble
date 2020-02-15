import React from "react";
import "./style.css"

const Card = props => {

    return (
        <div className="card" style={{width:175, height:120}}>
            <img style={{width:175, height:120}} alt={props.name} src={props.image} onClick={() => props.randomizeChoices(props.id)} />
        </div>
    )
}

export default Card;