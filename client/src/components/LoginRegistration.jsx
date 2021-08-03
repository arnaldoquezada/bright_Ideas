import React, { useState } from 'react'
import { Container, Col, Row, Button, Form } from 'react-bootstrap'
import '../styles/loginStyles.scss'

const LoginRegistration = () => {

    const initialState = {
        name: "",
        alias: "",
        email: "",
        password: "",
        confirmPassword: "",       
      };

      const [userForm , setUserForm] = useState(initialState);

    return (
        <div>
            <Container>
                <h1 className="subTitulos">Bienvenidos!!!</h1>

                <Row>
                    <Col>
                        <h3 className="subTitulos">Registro</h3>
                        <div className="contenedor">
                            <Form>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" required/>
                                <Form.Label>Alias</Form.Label>
                                <Form.Control type="text" placeholder="Alias" required/>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className="inputs" type="email" placeholder="Ingrese email" required />
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="inputs" type="password" placeholder="Password" required/>
                                <Form.Label>Confirme password</Form.Label>
                                <Form.Control className="inputs" type="password" placeholder="Confirmar Password" required />
                                <Button type="submit" className="mb-2 boton-reg">
                                    REGISTRARSE
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col>
                     <h3 className="subTitulos">Login</h3>
                        <div className="contenedor">
                            <Form>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className="inputs" type="email" placeholder="Ingrese email" required />
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="inputs" type="password" placeholder="Password" required/>
                                <Button type="submit" className="mb-2 boton-reg">
                                        INGRESAR
                                </Button>
                            </Form>
                         </div>
                     </Col>

                </Row>
            </Container>
        </div>
    )
}
export default LoginRegistration;
