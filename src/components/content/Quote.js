import React from 'react';

const Quote = (props) => {
    const style = {
        textAlign: 'center',
        fontFamily: 'Serif',
        fontSize: '30px',
        fontStyle: 'italic'
    }
    return (
        <div id = 'text' style = {style}>
            "{props.selectedQuote.quote}"     
        </div>
    )
}

export default Quote