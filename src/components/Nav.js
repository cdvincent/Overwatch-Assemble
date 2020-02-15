import React from "react";
import "./style.css";

const Nav = props => {
  return (
      <nav id="nav">
        <h3 style={{color:"white"}} id="logo" href="/">Clicky Game</h3>
        <h5 style={{color:"white"}}  id="message">{props.message}</h5>
        <h5 style={{color:"white"}} id="scores">Score: {props.score}   High Score: {props.highScore}</h5>
      </nav>
  );
}

export default Nav;
