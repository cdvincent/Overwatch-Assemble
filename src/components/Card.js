import React from "react";

const Card = props => {

    return (
        <div className="card">
      <div className="img-container">
        <img style={{width:175, height:120}} alt={props.name} src={props.image} onClick={this.shoot} />
      </div>
    </div>
    )
}

export default Card;