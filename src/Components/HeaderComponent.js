import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Col, Row, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import ModalFooter from 'reactstrap/lib/ModalFooter';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    handleChange(event) {
        this.setState({value: event.target.value})
    }
    handleSubmit(values) {
    this.toggleModal();
        if (values.symbol){
            this.props.postSymbol(values.symbol);
        }
        if (values.crypto){
            this.props.postCrypto(values.crypto)
        }  
    } 
      
    render() {
        return (
            <React.Fragment>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        <h3>Change Your Symbol</h3>
                        <h4>If your stock/ crypto doesn't load please look at our specifications and retry.</h4>
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col>
                                    <Label style={{color:'#ccc'}}htmlFor="symbol">Put your stock below. Please use the stock's symbol. (AAPL, GOOG, TSLA, etc.)</Label>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Control.text model=".symbol" id="symbol" name="symbol"
                                            placeholder="Symbol"
                                            className="form-control"
                                    />
                                </Col>
                            </Row> 
                            <Row className="form-group">
                                <Col>
                                    <Label style={{color:'#ccc'}} htmlFor="crypto">Put your crypto below. Please use the official name of the coin. (dogecoin, bitcoin, bitcoin cash, binance coin, etc.)</Label>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Control.text model=".crypto" id="crypto" name="crypto"
                                            placeholder="Crypto"
                                            className="form-control"
                                            />
                                </Col> 
                            </Row>                            
                            <ModalFooter>                             
                                <Button type="submit" color="primary">Save changes</Button>
                                <Button type="button" class="btn btn-secondary" onClick={this.toggleModal}>Close</Button>
                            </ModalFooter>                           
                        </LocalForm>
                    </ModalBody>
                </Modal>

                <Jumbotron style={{backgroundColor:"rgba(140, 126, 44, 0.86)" , margin:"0px"}} fluid>
                    <div className="container">
                        <div className="row xs-2">
                            <div className="col-md-2">
                                <img src='/img/logo.png' alt="Backround image" width="110" style={{paddingBottom:"40px"}}className="img-fluid" />
                            </div>
                            <div className="col-md-5">
                                <h1>Mercurius</h1>
                                <h2>Stock and Crypto Analysis</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/img/logo.png" height="30" width="30" alt="Mercurius Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/markets">
                                        <i className="fa fa-money fa-lg" /> Markets
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/analysis">
                                        <i className="fa fa-line-chart fa-lg" /> Analysis
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/crypto">
                                        <i className="fa fa-database fa-lg" /> Crypto
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-sign-in fa-lg" /> Change Symbol
                                </Button>    
                            </span>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default Header;