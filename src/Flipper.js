import React, { Component } from 'react';
import Coin from './Coin';
import './Flipper.css';

class Flipper extends Component {

    static defaultProps = {
        title: "Coin Flip"
    };

    constructor(props){
        super(props);
        this.state = {
            heads: 0,
            tails: 0,
            side: "heads",
            flipping: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        let flipResult = Math.random();
        let headScore = this.state.heads;
        let tailScore = this.state.tails;
        if(flipResult <= 0.5){
            headScore += 1;
            this.setState({heads: headScore, side: 'heads'});
        } else {
            tailScore += 1;
            this.setState({tails: tailScore, side: 'tails'});
        }
    }

    handleClick() {
        this.flipCoin();
    }

    render() {
        return (
            <section className="Flipper">
                <h1 className="Flipper-Title">{this.props.title}</h1>
                <Coin side={this.state.side} flipping={this.state.flipping} />
                <h2 className="Flipper-Score">Heads: {this.state.heads} Tails: {this.state.tails}</h2>
                <button className={`${this.state.side}`} onClick={this.handleClick}>Flip</button>
            </section>
        );
    }
}

export default Flipper;