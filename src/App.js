import React, { Component } from 'react';
import QuoteMachine from './components/QuoteMachine';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedIndex: null,
      bgColor: ['#e54d42', '#f37b1d', '#fbbd08', '#8dc63f',
                '#39b54a','#1cbbb4', '#6739b6',
                '#a5673f','#8799a3','#8AD6CC','#F99192','#385A7C']
    };
    
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this)
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this)
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')    
    .then(response => response.json())
    .then( (quotes) => this.setState({ quotes }, this.assignNewQuoteIndex))
  }

  /**
   * return integer between 0 and the length of quotes
   */
  generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined
    }
      return Math.floor(Math.random()* (this.state.quotes.length))
  }

  get selectedQuote() { 
    if (!this.state.quotes.length) {
      return undefined
    }
    return this.state.quotes[this.state.selectedIndex]
  }

  get selectedColor() {
    if (!this.state.quotes.length) {
      return undefined
    }

    let colorIndex = this.state.selectedIndex % this.state.bgColor.length
    
    return this.state.bgColor[colorIndex]
  }


  assignNewQuoteIndex() {
    this.setState({
      selectedIndex: this.generateNewQuoteIndex() 
    })
  }
  
  render() {
    return (
      this.selectedQuote ? 
      <QuoteMachine selectedQuote = {this.selectedQuote} 
        assignNewQuoteIndex = {this.assignNewQuoteIndex}
        selectedColor = {this.selectedColor}/>
       : null 
    )
  } 
}

export default App;
