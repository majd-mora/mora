import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

// importing logo.png

import logo from '../navlogo/logo.png';
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

class NavBar extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed className="navbar-dark">
                        <Container>
                        <Navbar.Brand href="/home">
                        <img src={logo} width="50" height="50" className="d-inline-block align-top"
                            alt="React Bootstrap logo" href="/home"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto, navbar">
                            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>

                    

                    <Switch>
                    
                    
                    <Route path="/about">
                        <About />
                    </Route>

                    
                    <Route path="/contact">
                        <Contact />
                    </Route>


                    <Route path="/">
                        <Home />
                    </Route>

                    

                    </Switch>    
                </div>
            </HashRouter>
        );
    }
}

  

export default NavBar;