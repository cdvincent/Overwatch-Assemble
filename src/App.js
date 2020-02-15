import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import choices from "./Choices.js";

class App extends Component {

        state = {
                choices,
                chosen: [],
                score: 0,
                highScore: 0,
                message: "Select an image!"
        };
        
        randomizeChoices = id => {
                let chosen = this.state.chosen;

                if (chosen.includes(id)) {
                        this.setState({ chosen: [], score: 0, message: "Game over!" });
                        return;
                } else {
                        chosen.push(id);
                        console.log(chosen);
                        if (choices.length === 12) {
                                this.setState({score: 0, message: "You Win!", chosen: []});
                        }
                        if (this.state.score >= this.state.highScore) {
                                this.setState({ highScore: chosen.length });
                        }
                
                this.setState({ choices, chosen, score: chosen.length, message: "Select an image!" });


                for (let i = choices.length - 1; i > 0; i--) {
                        let j = Math.floor(Math.random() * (i + 1));
                        [choices[i], choices[j]] = [choices[j], choices[i]];
                }
        }
}
        

        render() {                
                return (
                <div>
                <Nav 
                        score={this.state.score}
                        highScore={this.state.highScore}
                        message={this.state.message}
                />
                <Wrapper>
                        {this.state.choices.map(choice => (
                        <Card 
                                id={choice.id}
                                key={choice.id}
                                name={choice.name} 
                                image={choice.image}
                                randomizeChoices={this.randomizeChoices}
                        />
                        ))}
                </Wrapper>
                </div>
                );
        };
        
};

export default App;