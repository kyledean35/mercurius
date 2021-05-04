import React, { Component } from 'react';

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

class Overview extends  Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        }
    
    componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
    script.async = true;
    script.innerHTML = JSON.stringify({
        "colorTheme": "dark",
        "dateRange": "12M",
        "showChart": true,
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": true,
        "width": "300",
        "height": "600",
        "plotLineColorGrowing": "rgba(25, 118, 210, 1)",
        "plotLineColorFalling": "rgba(25, 118, 210, 1)",
        "gridLineColor": "rgba(42, 46, 57, 1)",
        "scaleFontColor": "rgba(120, 123, 134, 1)",
        "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
        "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
        "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
        "tabs": [
        {
            "title": "Indices",
            "symbols": [
            {
                "s": "FOREXCOM:SPXUSD",
                "d": "S&P 500"
            },
            {
                "s": "FOREXCOM:NSXUSD",
                "d": "Nasdaq 100"
            },
            {
                "s": "FOREXCOM:DJI",
                "d": "Dow 30"
            },
            {
                "s": "INDEX:NKY",
                "d": "Nikkei 225"
            },
            {
                "s": "INDEX:DEU30",
                "d": "DAX Index"
            },
            {
                "s": "FOREXCOM:UKXGBP",
                "d": "FTSE 100"
            }
            ],
            "originalTitle": "Indices"
        },
        {
            "title": "Commodities",
            "symbols": [
            {
                "s": "CME_MINI:ES1!",
                "d": "S&P 500"
            },
            {
                "s": "CME:6E1!",
                "d": "Euro"
            },
            {
                "s": "COMEX:GC1!",
                "d": "Gold"
            },
            {
                "s": "NYMEX:CL1!",
                "d": "Crude Oil"
            },
            {
                "s": "NYMEX:NG1!",
                "d": "Natural Gas"
            },
            {
                "s": "CBOT:ZC1!",
                "d": "Corn"
            }
            ],
            "originalTitle": "Commodities"
        },
        {
            "title": "Bonds",
            "symbols": [
            {
                "s": "CME:GE1!",
                "d": "Eurodollar"
            },
            {
                "s": "CBOT:ZB1!",
                "d": "T-Bond"
            },
            {
                "s": "CBOT:UB1!",
                "d": "Ultra T-Bond"
            },
            {
                "s": "EUREX:FGBL1!",
                "d": "Euro Bund"
            },
            {
                "s": "EUREX:FBTP1!",
                "d": "Euro BTP"
            },
            {
                "s": "EUREX:FGBM1!",
                "d": "Euro BOBL"
            }
            ],
            "originalTitle": "Bonds"
        },
        {
            "title": "Forex",
            "symbols": [
            {
                "s": "FX:EURUSD"
            },
            {
                "s": "FX:GBPUSD"
            },
            {
                "s": "FX:USDJPY"
            },
            {
                "s": "FX:USDCHF"
            },
            {
                "s": "FX:AUDUSD"
            },
            {
                "s": "FX:USDCAD"
            }
            ],
            "originalTitle": "Forex"
            }]
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

class Quotes extends  Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js'
        script.async = true;
        script.innerHTML = JSON.stringify({
        "title": "Stocks",
        "width": 650,
        "height": 600,
        "locale": "en",
        "showSymbolLogo": true,
        "symbolsGroups": [
        {
            "name": "Financial",
            "symbols": [
            {
                "name": "NYSE:JPM",
                "displayName": "Jpmorgan Chase & Co"
            },
            {
                "name": "NYSE:WFC",
                "displayName": "Wells Fargo Co New"
            },
            {
                "name": "NYSE:BAC",
                "displayName": "Bank Amer Corp"
            },
            {
                "name": "NYSE:HSBC",
                "displayName": "Hsbc Hldgs Plc"
            },
            {
                "name": "NYSE:C",
                "displayName": "Citigroup Inc"
            },
            {
                "name": "NYSE:MA",
                "displayName": "Mastercard Incorporated"
            }
            ]
        },
        {
            "name": "Technology",
            "symbols": [
            {
                "name": "NASDAQ:AAPL",
                "displayName": "Apple"
            },
            {
                "name": "NASDAQ:GOOGL",
                "displayName": "Google Inc"
            },
            {
                "name": "NASDAQ:MSFT",
                "displayName": "Microsoft Corp"
            },
            {
                "name": "NASDAQ:FB",
                "displayName": "Facebook Inc"
            },
            {
                "name": "NYSE:ORCL",
                "displayName": "Oracle Corp"
            },
            {
                "name": "NASDAQ:INTC",
                "displayName": "Intel Corp"
            }
            ]
        },
        {
            "name": "Services",
            "symbols": [
            {
                "name": "NASDAQ:AMZN",
                "displayName": "Amazon Com Inc"
            },
            {
                "name": "NYSE:BABA",
                "displayName": "Alibaba Group Hldg Ltd"
            },
            {
                "name": "NYSE:T",
                "displayName": "At&t Inc"
            },
            {
                "name": "NYSE:WMT",
                "displayName": "Wal-mart Stores Inc"
            },
            {
                "name": "NYSE:CHL",
                "displayName": "China Mobile Limited"
            },
            {
                "name": "NYSE:V",
                "displayName": "Visa Inc"
            }
            ]
        }
        ],
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

class Hotlists extends  Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js'
        script.async = true;
        script.innerHTML = JSON.stringify({
            "colorTheme": "dark",
            "dateRange": "12M",
            "exchange": "US",
            "showChart": true,
            "locale": "en",
            "largeChartUrl": "",
            "isTransparent": false,
            "showSymbolLogo": false,
            "width": "1100",
            "height": "600",
            "plotLineColorGrowing": "rgba(0, 255, 0, 1)",
            "plotLineColorFalling": "rgba(255, 0, 0, 1)",
            "gridLineColor": "rgba(42, 46, 57, 1)",
            "scaleFontColor": "rgba(120, 123, 134, 1)",
            "belowLineFillColorGrowing": "rgba(182, 215, 168, 0.12)",
            "belowLineFillColorFalling": "rgba(234, 153, 153, 0.12)",
            "symbolActiveColor": "rgba(33, 150, 243, 0.12)"
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

function Markets() {
   
    return (
        <div style={{backgroundColor:"rgb(15, 15, 15)"}}>
            <Ticker/>
            <div className = "container">
                <div className = "row bodyPadding">
                    <div className="col-md-6 ">
                        <Overview/>
                    </div>
                    <div className="col-md-6 ">
                        <Quotes/>
                    </div>
                </div>
                <div className="row bodyPadding">
                    <div className="col-md-6">
                        <Hotlists/>
                    </div>
                </div>   
            </div>
        </div>
    );
}

export default Markets;