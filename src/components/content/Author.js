import React from 'react';

const Author = (props) => {

    const style = {
        textAlign: 'right',
        padding: '2% 0%',
        fontSize: '18px',
        fontFamily: 'Cursive'
    }
    return (
        <div id = 'author' style = {style}>
            - {props.selectedQuote.author}
        </div>
    )
}

export default Author