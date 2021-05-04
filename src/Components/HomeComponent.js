import React, { Component } from 'react';
import TradingViewWidget, { Themes, BarStyles } from 'react-tradingview-widget';

class Ticker extends  Component {
  constructor(props) {
      super(props);
      this.myRef = React.createRef();
  }
    
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "Nasdaq 100"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR/USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "BTC/USD"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "ETH/USD"
          }
        ],
        "showSymbolLogo": true,
        "colorTheme": "dark",
        "isTransparent": false,
        "displayMode": "adaptive",
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

const AdvancedAnalysis = (props) => (
  <TradingViewWidget
    symbol={props.symbol}
    theme={Themes.DARK}
    height="400px"
    locale="en"
    hideideas="false"
    hide_side_toolbar="false"
    withdateranges="true"
    style= {BarStyles.HEIKIN_ASHI}
  />
);

function Home(props) {

  return (
    <div style={{backgroundColor:"rgb(15, 15, 15)"}}>
      <Ticker/>
      <div className = "container">
          <div className = "row bodyPadding">
              <div className = "col-md mt-1">
                  <h2> Our Mission </h2>
                  <p>
                      Our goal is to help users find accurate and current stock information in a quick and easy manner.
                  </p>
              </div>  
        </div>
        <div ClassName="row bodyPadding">
          <div className="col-md" style={{paddingBottom:"50px"}} >
            <AdvancedAnalysis symbol={props.symbol}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;