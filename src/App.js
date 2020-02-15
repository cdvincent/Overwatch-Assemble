import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import choices from "./Choices.js";

class App extends Component {

        state = {
                choices: choices,
                chosen: [],
                score: 0,
                highScore: 0,
                message: "Select an image!"
        };
        
        pushArray = () => {
                this.setState({ chosen: this.push(this.state.chosen)})
                console.log(this.state.chosen);
        }
        shoot() {
                alert("Great Shot!");
              }

        render() {                
                return (
                <Wrapper>
                        <Nav />
                        {this.state.choices.map(choice => (
                        <Card 
                                id={choice.id}
                                name={choice.name} 
                                image={choice.image}
                                key={choice.id}
                                onClick={this.shoot()}
                        />
                        ))}
                </Wrapper>
                );
        };
        
};

export default App;