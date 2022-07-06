import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">rebridge.net</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="https://www.linkedin.com/in/robby-bridges/">LinkedIn</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header