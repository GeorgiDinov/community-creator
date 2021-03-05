import React, {useState} from 'react';
import axios from "axios";
import {Button, Col, Form} from "react-bootstrap";

const Registration = () => {

    const REGISTRATION_URL = "/register";

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");


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

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const onChangeStreet = (e) => {
        const street = e.target.value;
        setStreet(street);
    }

    const onChangeCity = (e) => {
        const city = e.target.value;
        setCity(city);
    }
    const onChangeProvince = (e) => {
        const province = e.target.value;
        setProvince(province);
    }


    function compactRequestObject() {
        return {
            firstName,
            lastName,
            user_credentials: {
                email,
                password
            },
            address: {
                street,
                city,
                province
            }
        }
    }


    const handleRegister = (e) => {
        e.preventDefault();
        let request = compactRequestObject();
        console.log(request);

        return axios
            .post(REGISTRATION_URL, request)
            .then((response) => {
                console.log(response.status);
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

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Your email" onChange={event => onChangeEmail(event)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Your password"
                                      onChange={event => onChangePassword(event)}/>
                    </Form.Group>
                </Form.Row>


                <Form.Group controlId="formGridAddress">
                    <Form.Label>Street</Form.Label>
                    <Form.Control placeholder="Street name" onChange={event => onChangeStreet(event)}/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" onChange={event => onChangeCity(event)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridProvince">
                        <Form.Label>Province</Form.Label>
                        <Form.Control as="select" defaultValue="" onChange={event => onChangeProvince(event)}>
                            <option disabled={true} value=""/>
                            <option value="Blagoevgrad">Blagoevgrad</option>
                            <option value="Bourgas">Bourgas</option>
                            <option value="Dobrich">Dobrich</option>
                            <option value="Gabrovo">Gabrovo</option>
                            <option value="Haskovo">Haskovo</option>
                            <option value="Kardzhali">Kardzhali</option>
                            <option value="Kyustendil">Kyustendil</option>
                            <option value="Lovech">Lovech</option>
                            <option value="Montana">Montana</option>
                            <option value="Pazardzhik">Pazardzhik</option>
                            <option value="Pernik">Pernik</option>
                            <option value="Pleven">Pleven</option>
                            <option value="Plovdiv">Plovdiv</option>
                            <option value="Razgrad">Razgrad</option>
                            <option value="Ruse">Ruse</option>
                            <option value="Shumen">Shumen</option>
                            <option value="Silistra">Silistra</option>
                            <option value="Sliven">Sliven</option>
                            <option value="Smolyan">Smolyan</option>
                            <option value="Sofia City">Sofia City</option>
                            <option value="Sofia (province)">Sofia (province)</option>
                            <option value="Stara Zagora">Stara Zagora</option>
                            <option value="Targovishte">Targovishte</option>
                            <option value="Varna">Varna</option>
                            <option value="Veliko Tarnovo">Veliko Tarnovo</option>
                            <option value="Vidin">Vidin</option>
                            <option value="Vratsa">Vratsa</option>
                            <option value="Yambol">Yambol</option>
                        </Form.Control>
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