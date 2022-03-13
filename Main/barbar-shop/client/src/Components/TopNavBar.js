import React, {Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from "./../Assets/img/logo.png"
import {NavLink} from "react-router-dom";
const TopNavBar = () => {
    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link> <div><NavLink activeClassName="nav-link-active" className="nav-link" exact to="/">HOME</NavLink></div></Nav.Link>
                            <Nav.Link> <div><NavLink activeClassName="nav-link-active" className="nav-link" exact to="/about">ABOUT</NavLink></div></Nav.Link>
                            <Nav.Link> <div><NavLink activeClassName="nav-link-active" className="nav-link" exact to="/services">SERVICES</NavLink></div></Nav.Link>
                            <Nav.Link> <div><NavLink activeClassName="nav-link-active" className="nav-link" exact to="/gallery">GALLERY</NavLink></div></Nav.Link>
                            <Nav.Link> <div><NavLink activeClassName="nav-link-active" className="nav-link" exact to="/contact">CONTACT</NavLink></div></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default TopNavBar;