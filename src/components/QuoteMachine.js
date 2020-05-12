import React from 'react';
import Content from './Content';
import Action from './Action';



const QuoteMachine = (props) => {
    const style1 = {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        backgroundColor: props.selectedColor

    }
    const style2 = {
        
        width: '40vw',
        margin: 'auto',
        backgroundColor: '#fff',
        color: props.selectedColor,
        padding: '15px 30px' ,
        borderRadius: '5%',
        boxShadow: '5px'
    }
    return (
    <div id = 'main' style = {style1}>
        <div id = 'quote-box' style = {style2}>
            <Content selectedQuote = {props.selectedQuote}/>
            <Action selectedColor = {props.selectedColor} selectedQuote = {props.selectedQuote} assignNewQuoteIndex = {props.assignNewQuoteIndex}/>
        </div>
    </div>
  )
}

export default QuoteMachine