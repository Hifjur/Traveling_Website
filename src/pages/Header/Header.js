import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
import useAuth from './../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar className="change-color" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"> <span className="travelto text-white">TravelTo</span> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="style-nav" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="style-nav" as={HashLink} to="/home#resorts">Resorts</Nav.Link>
                        <Nav.Link className="style-nav" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="style-nav" as={HashLink} to="/home#events">Events</Nav.Link>

                        <br />
                        {user.email ?
                            <div className="login-nav-link">
                                <Nav.Link className="style-nav" as={HashLink} to="/myPackages">My Packages</Nav.Link>
                                
                                <button className="style-nav-logout" onClick={logOut}>Log Out {user.photo} </button>
                            </div>
                            :
                            <Nav.Link className="style-nav" as={HashLink} to="/login">Login </Nav.Link>}



                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;