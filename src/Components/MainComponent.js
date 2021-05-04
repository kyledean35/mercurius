import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Markets from './MarketsComponent';
import Crypto from './CryptoComponent';
import Analysis from './AnalysisComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postSymbol, fetchSymbol, postCrypto, fetchCrypto } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        symbol: state.symbol,
        crypto: state.crypto
    };
};

const mapDispatchToProps = {
    postSymbol: (symbol) =>(postSymbol(symbol)),
    fetchSymbol: () => (fetchSymbol()),
    postCrypto: (crypto) =>(postCrypto(crypto)),
    fetchCrypto: () => (fetchCrypto()),
};


class Main extends Component {
    componentDidMount() {
        this.props.fetchSymbol();
        this.props.fetchCrypto();
    }
   
    render() {
        let symbol='NASDAQ:'.concat(JSON.stringify(this.props.symbol.symbol).replace(/['"]+/g, ''))
        let crypto=JSON.stringify(this.props.crypto.crypto).replace(/['"]+/g, '').replace(' ', '-')

        return (
            <div>
                <Header symbol={this.props.symbol} fetchSymbol={this.props.fetchSymbol} postSymbol={this.props.postSymbol} postCrypto={this.props.postCrypto}/>
                        <Switch>
                            <Route exact path='/home' render={() => <Home symbol={symbol}/>} />
                            <Route exact path='/analysis' render={() => <Analysis symbolLoading={this.props.symbol.isLoading} symbol={symbol} fetchSymbol={this.props.fetchSymbol}/>} />
                            <Route exact path='/markets' render={() => <Markets symbol={symbol}/>} />
                            <Route exact path='/crypto' render={() => <Crypto cryptoLoading={this.props.crypto.isLoading} crypto={crypto}/>} />
                            <Redirect to='home'/>
                        </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));