import React, { Component} from 'react';
import TradingViewWidget, { Themes, BarStyles } from 'react-tradingview-widget';

//Classes for the widgets used on the advanced page
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

class SymbolOverview extends  Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount(props) {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
    script.async = true;
    script.innerHTML = JSON.stringify({
      "interval": "1m",
        "width": "425",
        "isTransparent": false,
        "height": "450",
        "symbol": this.props.symbol,
        "showIntervalTabs": true,
        "locale": "en",
        "colorTheme": "dark"
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

class TechAnalysis extends  Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    
  }
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": this.props.symbol,
      "width": "425",
      "height": "450",
      "locale": "en",
      "dateRange": "12M",
      "colorTheme": "dark",
      "trendLineColor": "#37a6ef",
      "underLineColor": "rgba(55, 166, 239, 0.15)",
      "isTransparent": false,
      "autosize": false,
      "largeChartUrl": ""
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
    style= {BarStyles.AREA}
    locale="en"
    width='1100'
    height='400'
  />
);     

//Function for the actual rendering of the analysis page
function Analysis(props) {

  //if the symbol is loading, the page renders without the widgets
  if (props.symbolLoading){
    return (
      <div style={{backgroundColor:"rgb(15, 15, 15)"}}>
        <Ticker/>
        <div className = "container">
          <div className = "row bodyPadding">
              <div className="col-md ">
              </div>
              <div className="col-md ">
              </div>
          </div>
          <div className="row bodyPadding">
          </div>
        </div>
      </div>
    )
  }
  
  //After the symbol loads, the actual page loads
  return (
    <div style={{backgroundColor:"rgb(15, 15, 15)"}}>
      <Ticker/>
      <div className = "container">
          <div className = "row bodyPadding">
              <div className="col-md ">
              <SymbolOverview symbol={props.symbol}/>
              </div>
              <div className="col-md ">
              <TechAnalysis symbol={props.symbol}/>
              </div>
          </div>
          <div className="row bodyPadding">
            <AdvancedAnalysis symbol={props.symbol}/>
          </div>
      </div>
    </div>
  );
}

export default Analysis;