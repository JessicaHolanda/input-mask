import React, { useState } from 'react';
import Input from './../../components/Input';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './../../assets/styles/global.css';

function Formulario() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    return (

        <div className="contact container ">
            <div id="content-wrap">

                <h1>Formulario</h1>

                <Row>
                    <Col md={7} xs={12}>

                        <div className="form-contact">
                            <Form>
                                <Row>
                                    <Col md={12} xs={12}>
                                        <Input placeholder="Seu nome" name="name" label="Seu nome" value={name}
                                            onChange={(e) => { setName(e.target.value) }}
                                        />

                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} xs={12}>
                                        <Input type="email" name="email" placeholder="Endereço de e-mail" label="Endereço de email" value={email}
                                            onChange={(e) => { setEmail(e.target.value) }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input name="phone" mask="phone" placeholder="(00) 00000-0000" label="Telefone" value={phone}
                                            onChange={(e) => { setPhone(e.target.value) }}
                                        />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="d-flex justify-content-center mt-3">
                                        <Button className="button-contact" onClick={() => console.log([name, email, phone, message])}>Enviar Mensagem</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>

                </Row>
            </div>
        </div>

    )
}