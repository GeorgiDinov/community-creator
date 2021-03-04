import React, {useState} from 'react';
import axios from "axios";
import {Button, Col, Form} from "react-bootstrap";

const Registration = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [successful, setSuccessful] = useState(false);


    const onChangeFirstName = (e) => {
        const firstName = e.target.value;
        setFirstName(firstName);
    }

    const onChangeLastName = (e) => {
        const lastName = e.target.value;
        setLastName(lastName);
    }

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const onChangeAddress = (e) => {
        const address = e.target.value;
        setAddress(address);
    }

    const onChangeCity = (e) => {
        const city = e.target.value;
        setCity(city);
    }
    const onChangeProvince = (e) => {
        const province = e.target.value;
        setProvince(province);
    }

    const REGISTER = "register";


    const handleRegister = (e) => {
        e.preventDefault();
        console.log(firstName + " " + lastName + " " + email + " " + address + " " + city + " " + province);
        setSuccessful(false);
        return axios
            .post(REGISTER, {
                firstName,
                lastName,
                email,
                address,
                city,
                province,
            }).then((response) => {
                let regUserDTO = {
                    "id": response.data.id,
                    "username": response.data.username
                }
                console.log(regUserDTO);
                localStorage.setItem("regUserDTO", JSON.stringify(regUserDTO));
                setSuccessful(true);
                return response.data;
            }).catch((response) => {
                console.log(response.status);
            });
    };

    return (
        <div className='col'>
            <Form onSubmit={event => handleRegister(event)}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First name"
                                      onChange={event => onChangeFirstName(event)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" onChange={event => onChangeLastName(event)}/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Your email" onChange={event => onChangeEmail(event)}/>
                </Form.Group>

                <Form.Group controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Street name" onChange={event => onChangeAddress(event)}/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" onChange={event => onChangeCity(event)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridProvince">
                        <Form.Label>Province</Form.Label>
                        <Form.Control as="select" defaultValue="" onChange={event => onChangeProvince(event)}>
                            <option value=""/>
                            <option value="Plovdiv">Plovdiv</option>
                            <option value="Sofia">Sofia</option>
                            <option value="Varna">Varna</option>
                            <option value="Bourgas">Bourgas</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                </Form.Row>

                <Button variant="outline-info" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    )
}


export default Registration