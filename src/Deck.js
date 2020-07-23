import React, { Component } from 'react';
import Card from './Card.js';
import Axios from 'axios';
import './Deck.css';

class Deck extends Component {
    static defaultProps = {
        deck_init_url: 'https://deckofcardsapi.com/api/deck/new/shuffle',
        deck_draw_url: 'https://deckofcardsapi.com/api/deck/'
    }
    constructor(props) {
        super(props);
        this.state = {
            deck_id: '',
            cards_remaining: 0,
            card_images: []
        }
        this.getCard = this.getCard.bind(this);
    }
    async componentDidMount() {
        const url = `${this.props.deck_init_url}`;
        let response = await Axios.get(url);
        let data = response.data;
        console.log(data);
        this.setState({
            deck_id: data.deck_id,
            cards_remaining: data.remaining
        });
    }
    async getCard() {
        const url = `${this.props.deck_draw_url}${this.state.deck_id}/draw/`
        try {
            let response = await Axios.get(url);
            if(response.data.success === false){
                throw new Error("No Cards Remaining!");
            }
            let card_image = response.data.cards[0].image
            let cards = this.state.card_images;
            cards.push(card_image);
            this.setState({
            card_images: cards
            })
        } catch(err) {
            alert(err);
        }
    }
    render() {
        return (
            <div className="Deck">
                <div className="Deck-title-box">
                    <h1 className="Deck-title">Deck of Cards</h1>
                </div>
                <div className="Deck-cards">
                    {this.state.card_images.map(image => (
                        <Card card_image={image} />
                    ))}
                </div>
                <div classNama="Deck-button">
                    <button onClick={this.getCard}>
                        Deal
                    </button>
                </div>
            </div>
        )
    }
}

export default Deck;