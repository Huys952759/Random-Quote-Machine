import React from 'react';

const NewQuote = (props) => {
    const style = {
        backgroundColor: props.selectedColor,
        width: '90px',
        borderRadius: '5px',
        color: '#fff',
        fontSize: '15px',
        padding: '3px',
        fontFamily: 'Lora',
        textAlign: 'center'
        
    }
    return (
        <button  style = {style} id = 'new-quote'  onClick = {props.assignNewQuoteIndex}>
            New quote
        </button>

    )
}

export default NewQuote