// default imports
import React, { Component } from 'react';
import './QuoteGenerator.css';

// fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faTwitter, faSyncAlt);

const buttonStyle = { 
  display: 'inline-block',
	backgroundColor: 'grey',
  textDecoration: 'none',
  color: 'white',
  borderRadius: 2,
  padding: `10px 15px`,
  marginRight: '10px',
  marginBottom: '5px',
  boxShadow: `1px 1px 1px #000`
};

class QuoteGenerator extends Component {

	constructor(props) {
  	super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      currentQuote: '',
      currentAuthor: ''
    };
    this.getNewQuote = this.getNewQuote.bind(this);
    this.getNewIndex = this.getNewIndex.bind(this);
  }
  
  componentDidMount() {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then(res => res.json())
      .then(
        (result) => {
        	let quoteIndex = this.getNewIndex(result.quotes.length);
          this.setState({
            isLoaded: true,
            items: result.quotes,
            currentQuote: result.quotes[quoteIndex].quote,
            currentAuthor: result.quotes[quoteIndex].author
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        });
  }
  
  getNewIndex(length) {
  	return Math.floor(Math.random() * length);
  }
  
  getNewQuote() {
  	const quoteIndex = this.getNewIndex(this.state.items.length);
    this.setState({
    	currentQuote: this.state.items[quoteIndex].quote,
      currentAuthor: this.state.items[quoteIndex].author
    });
  }
  
  render() {
  	const { error, isLoaded, items, currentQuote, currentAuthor } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id="quote-box" style={{ padding: 50, paddingTop: 60, backgroundColor: 'lightGray', boxShadow: `2px 2px 1px #888`, marginBottom: '1em' }}>
        	<hr />
        	<div id="text" style={{ marginTop: 25, textAlign: 'justify' }}>
          	{this.state.currentQuote}
          </div>
          <div id="author" style={{ marginTop: 10, marginBottom: 30, textAlign: 'right' }}>
          	{this.state.currentAuthor}
          </div>
          <div id="buttons">
            <a id="new-quote" onClick={ this.getNewQuote } style={ buttonStyle }><FontAwesomeIcon icon={faSyncAlt} /> Refresh</a>
            <span style={{ display: 'inline-block '}} >
            <a href={'https://twitter.com/intent/tweet?related=freecodecamp&text=' + '"' + this.state.currentQuote + '"' + " -" + this.state.currentAuthor} id="tweet-quote" target="_blank" style={ buttonStyle }>
              <FontAwesomeIcon icon={faTwitter} /> Tweet
            </a>
            </span>
          </div>
        </div>
      );
    }
	}
}

//ReactDOM.render(<QuoteBox />, document.getElementById('mountNode'));

export default QuoteGenerator;