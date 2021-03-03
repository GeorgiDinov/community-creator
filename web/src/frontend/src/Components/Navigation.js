import React from 'react';
import {Button, Form, FormControl, Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logoPhoto from '../images/ms-icon-70x70.png'

const Navigation = () => {
    return (
        <nav className="navbar bg-light">
            <div className='col'>
                <NavLink exact activeClassName="active-link" to="/">
                    <Image src={logoPhoto} roundedCircle/>
                </NavLink>
            </div>
            <div className='col'>
                <NavLink exact activeClassName="active-link" to="/login">Login</NavLink>
            </div>
            <div className='col'>
                <NavLink exact activeClassName="active-link" to="/register">Register</NavLink>
            </div>

            <div className='col'>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-info">Search</Button>
                </Form>
            </div>
        </nav>
    )
}

export default Navigation