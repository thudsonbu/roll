import React, { Component } from 'react';
import Box from "./Box";
import './BoxContainer.css';

class BoxContainer extends Component {
    
    static defaultProps = {
        numBoxes: 18
    };

    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
            <Box />
        ));
        return (
            <div>
                <h1 className="BoxContainer-Title">Box Color Clicker</h1>
                <div className="BoxContainer">{boxes}</div>
            </div>
        );
    }
}

export default BoxContainer;