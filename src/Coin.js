import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    render() {
        return (
            <div className={`Coin ${this.props.side}`}>
                <div className="Coin-Text">{this.props.side === 'heads' ? 'H' : 'T'}</div>
            </div>
        )
    }
}

export default Coin;