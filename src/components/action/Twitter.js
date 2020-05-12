import React from 'react';

const Twitter = (props) => {
    const style1 = {
        backgroundColor: props.selectedColor,
        width: '50px',
        borderRadius: '5px'
    }

    const style2 = {
        color: '#fff',
        fontSize: '25px',
        padding: '2px'
        
    }
    return (
        <button style = {style1} >
            <a id = 'tweet-quote'  target = '_blank' href= {`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}`}>
                <i style = {style2} className ="fa fa-twitter"></i>
            </a>
        </button>
    )
}

export default Twitter