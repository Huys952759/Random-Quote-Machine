import React from 'react';
import Quote from './content/Quote'
import Author from './content/Author'

const Content = (props) => {
    const style = {
        marginBottom: '30px'
    }
    return (
        <div className = 'content' style = {style}>
            <Quote selectedQuote = {props.selectedQuote}/>
            <Author selectedQuote = {props.selectedQuote} />
        </div>
    )
}

export default Content