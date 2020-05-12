import React from 'react';
import Twitter from './action/Twitter';
import NewQuote from './action/NewQuote';

const Action = (props) => {

    const style = {
        display: 'flex',
        justifyContent: 'space-between'
    }
    return (
        <div className = 'action' style = {style}>
            <Twitter selectedColor = {props.selectedColor} selectedQuote = {props.selectedQuote}/>
            <NewQuote selectedColor = {props.selectedColor} assignNewQuoteIndex = {props.assignNewQuoteIndex}/>
        </div>
    )
}

export default Action
