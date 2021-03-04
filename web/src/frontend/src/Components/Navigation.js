import React from 'react';
import {Button, Dropdown, Form, FormControl, Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logoPhoto from '../images/ms-icon-70x70.png'

const Navigation = () => {
    return (
        <nav className="navbar bg-light justify-content-start">
            <div className='col-1'>
                <NavLink exact activeClassName="active-link" to="/">
                    <Image src={logoPhoto} roundedCircle/>
                </NavLink>
            </div>
            <div className='col-1'>
                <NavLink exact activeClassName="active-link" to="/login">Login</NavLink>
            </div>
            <div className='col-1'>
                <NavLink exact activeClassName="active-link" to="/register">Register</NavLink>
            </div>

            <div className='col-6'>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
                        Learn Systema
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <NavLink exact className="dropdown-item" activeClassName="active-link" to="/test">Subject
                            A</NavLink>
                        <NavLink exact className="dropdown-item" activeClassName="active-link" to="/test-two">Subject
                            B</NavLink>
                        <NavLink exact className="dropdown-item" activeClassName="active-link" to="/test-three">Subject
                            C</NavLink>
                    </Dropdown.Menu>
                </Dropdown>
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