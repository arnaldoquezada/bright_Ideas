import React, { useState } from 'react'
import { Container, Col, Row, Button, Form } from 'react-bootstrap'
import '../styles/loginStyles.scss'
import servicesIdeas from '../services/ideasServices'

const LoginRegistration = () => {

    const servicioIdeas = new servicesIdeas();

    const initialState = {
        name: "",
        alias: "",
        email: "",
        password: "",
      };

      const [userForm , setUserForm] = useState(initialState);

      const [isLogin, setIsLogin] = useState(true);

      const loginUser = async (e) => {
          console.log(userForm)
        try {
            const login = await servicioIdeas.registerUser(userForm);
            

        } catch (err) {
            console.log("error catch: ", err)
            return err;
        }
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        loginUser();
      };
    
    const handleChange = (e) => {
        console.log("TextBox valor: ", userForm.name, userForm.alias, userForm.email, userForm.password);
        setUserForm({ ...userForm, [e.target.name]: e.target.value });
      };

    return (
        <div>
            <Container className="fondo-general">
                <h1 className="subTitulos">Bienvenidos!!!</h1>

                <Row>
                    <Col>
                        <h3 className="subTitulos">Registro</h3>
                        <div className="contenedor">
                            <form onSubmit={onSubmitHandler}>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" required name="name"
                                     onChange={handleChange}
                                />
                                <Form.Label>Alias</Form.Label>
                                <Form.Control type="text" placeholder="Alias" required name="alias" 
                                    onChange={handleChange}
                                />
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className="inputs" type="email" placeholder="Ingrese email" required name="email" 
                                    onChange={handleChange}
                                />
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="inputs" type="password" placeholder="Password" required name="password" 
                                    onChange={handleChange}
                                />
                                <Form.Label>Confirme password</Form.Label>
                                <Form.Control className="inputs" type="password" placeholder="Confirmar Password" required
                                    
                                />
                                <Button type="submit" className="mb-2 boton-reg">
                                    REGISTRARSE
                                </Button>
                            </form>
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
