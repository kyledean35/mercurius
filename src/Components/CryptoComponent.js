import React, { Component } from 'react';

//Classes for the widgets
class Ticker extends  Component {
  constructor(props) {
      super(props);
      this.myRef = React.createRef();
  }
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://widget.coinlore.com/widgets/ticker-widget.js'
    script.async = true;
    this.myRef.current.appendChild(script);
  }
  render() {
    return(
    <div className="coinlore-priceticker-widget" data-mcurrency="usd" data-bcolor="#1e212e" data-scolor="#FFF" data-ccolor="#fff" data-pcolor="#fff" ref={this.myRef}></div>
    );
  }
}

class Coin extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://widget.coinlore.com/widgets/new-widget.js'
    script.async = true;
    this.myRef.current.appendChild(script);
  }
  render() {
    return(
      <div class="coinlore-coin-widget" data-mcap="1" data-mcurrency="usd" data-d7="1" data-cwidth="100%" data-rank="1" data-vol="1" data-id={this.props.crypto} data-bcolor="#1e212e" data-tcolor="#fff" data-ccolor="#fff" data-pcolor="#fff" ref={this.myRef}>  </div>
    );
  }
}

class List extends  Component {
  constructor(props) {
      super(props);
      this.myRef = React.createRef();
  }
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": 1000,
      "height": 490,
      "defaultColumn": "moving_averages",
      "screener_type": "crypto_mkt",
      "displayCurrency": "USD",
      "colorTheme": "dark",
      "locale": "en"
    })
    this.myRef.current.appendChild(script);
  }
  render() {
    return(
      <div className="tradingview-widget-container" ref={this.myRef}>
          <div className="tradingview-widget-container__widget"></div>    
      </div>
    );
  }
}

//function for the rendering of the Crypto Page
function Crypto(props) {
  //If the Crypto name is loading the page will render without the widgets
  if (props.cryptoLoading){
    return(
      <div style={{backgroundColor:"rgb(15, 15, 15)"}}>
        <Ticker/>  
        <div className = "container">
          <div className = "row bodyPadding">
            <div className = "col-md-6" style={{paddingRight:"130px"}}>
              <h2> Cryptocurrency </h2>
              <p>Cryptocurrency is a form of decentralized monetary value formed by a blockchain. It is a form of digital currency wherein you can make transactions that will be stored in the blockchain element.</p>
            </div>
            <div className="col-md-6" style={{paddingLeft:"130px"}}>
                
            </div>
          </div>
          <div className="row bodyPadding">
              <List/>
          </div>
        </div>
      </div>
    )
  }
  //After Crypto name loads, page will load with widgets using the user provided
  return (
    <div style={{backgroundColor:"rgb(15, 15, 15)"}}>
      <Ticker/>
      <div className = "container">
        <div className = "row bodyPadding">
          <div className = "col-md-6" style={{paddingRight:"130px"}}>
            <h2> Cryptocurrency </h2>
            <p>Cryptocurrency is a form of decentralized monetary value formed by a blockchain. It is a form of digital currency wherein you can make transactions that will be stored in the blockchain element.</p>
          </div>
          <div className="col-md-6" style={{paddingLeft:"130px"}}>
            <Coin crypto={props.crypto}></Coin>
          </div>
        </div>
        <div className="row bodyPadding">
          <List/>
        </div>
      </div>
    </div>
  );
}

export default Crypto;