import React from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark" fixed="top">
            <Navbar.Brand href="/home">Systema Bulgaria</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/features">Register</Nav.Link>
                <Nav.Link href="/pricing">Search Training Partners</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Navigation