import React, { useState } from 'react'
import { Container, Col, Row, Button, Form, Alert } from 'react-bootstrap'
import '../styles/loginStyles.scss'
import servicesIdeas from '../services/ideasServices'
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useHistory } from "react-router-dom";

const LoginRegistration = () => {

    const servicioIdeas = new servicesIdeas();
    const history = useHistory();

    const initialState = {
        name: "",
        alias: "",
        email: "",
        password: "",
      };

      const [userForm , setUserForm] = useState(initialState);
      
      const [userLogin , setUserLogin] = useState({
          email_login: "",
          password_login: "",
      });
      const [error, setError] = useState('');
      const [errorLogin, setErrorLogin] = useState('');
      const [successMessage, setSucessMessage] = useState('');
      
      const [show, setShow] = useState(false);
      const [showLogin, setShowLogin] = useState(false);

      const [isLogin, setIsLogin] = useState(true);
      const {setItemFromLocalStorage} = useLocalStorage();

      const registerUser = async (e) => {
          console.log(userForm)
        try {
            const register = await servicioIdeas.registerUser(userForm);
            console.log("datos:",register.message)
            if (register){
                setShow(true);
                setSucessMessage('Usuario registrado exitosamente, ahora puede logearse con sus credenciales');
                
            }
            // if(register===null){
            //     console.log("nuLO")
            // }else{
            //     console.log("No nulo")
            // }

        } catch (err) {
            console.log("error catch: ", err)
            return err;
        }
    }
    const loginUser = async (e) => {
        console.log(userLogin)
      try {
          const login = await servicioIdeas.loginUser(userLogin)
          console.log(login)
          const {authUser, msg} = login;
          if (msg==="Se ha logueado correctamente!"){
            setSucessMessage('Bienvenido');
            setItemFromLocalStorage('idUser',authUser._id);
            setItemFromLocalStorage('alias',authUser.alias);
              history.push("/newIdeas");
          }else{
            setErrorLogin("Credenciales incorrectas!")
            setShowLogin(true);
          }
          
          // if(register===null){
          //     console.log("nuLO")
          // }else{
          //     console.log("No nulo")
          // }

      } catch (err) {
          console.log("error catch: ", err)
          return err;
      }
  }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        registerUser();
      };

      const onLoginHandler = (e) => {
        e.preventDefault();
        loginUser();
      };
    
    const handleChange = (e) => {
        
        console.log("TextBox valor: ", userForm.name, userForm.alias, userForm.email, userForm.password);
        if (e.target.name === 'name') {
            (e.target.value.length > 0 && e.target.value.length < 3) ? setError('* El nombre debe tener por lo menos 3 caracteres') : setError('')
        } else if (e.target.name === 'alias') {
            (e.target.value.length > 0 && e.target.value.length < 3) ? setError('* El alias debe tener por lo menos 3 caracteres') : setError('')
        } else if (e.target.name === 'email') {
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            emailRegex.test(e.target.value) ? setError('') : setError('*Favor ingresar un correo en formato xxxx@xxxx.xxxx');
        }else if (e.target.name==='password') {
            (e.target.value.length >0 && e.target.value.length <8) ? setError('* El password debe tener al menos 8 caracteres') : setError('')
        } 
        else if (e.target.name === 'confirm') {
            //console.log('entro acaaaa')
            (userForm.password === e.target.value) ? setError('') : setError('* Los passwords no coinciden')
        }

        e.target.name !== 'confirm' && setUserForm({ ...userForm, [e.target.name]: e.target.value });
      };

      const handleChangeLogin = (e) => {
        
       // console.log("TextBox valor: ", userForm.name, userForm.alias, userForm.email, userForm.password);
        // if (e.target.name === 'email_login') {
        //     const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        //     emailRegex.test(e.target.value) ? setError('') : setError('*Favor ingresar un correo en formato xxxx@xxxx.xxxx');
        // }else if (e.target.name==='password_login') {
        //     (e.target.value.length >0 && e.target.value.length <8) ? setError('* El password debe tener al menos 8 caracteres') : setError('')
        // } 
        

        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
      };

      const cerrarAlerta = ()=>{
        setShow(false);
        document.getElementById("register-form").reset();

      }

    return (
        <div>
            <Container className="fondo-general">
                <h1 className="subTitulos">Bienvenidos!!!</h1>
                
                <Row>
                    <Col>
                        <h3 className="subTitulos">Registro</h3>
                        {error!=='' && (
                            <Alert variant="danger">
                                {error}
                            </Alert>
                        )}
                            <Alert show={show} variant="success">
                                {successMessage}
                                <div className="d-flex justify-content-center">
                                    <Button onClick={() => cerrarAlerta()} variant="outline-success">
                                        Cerrar
                                    </Button>
                                </div>
                            </Alert>
                        <div className="contenedor">
                            <form id="register-form" onSubmit={onSubmitHandler}>
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
                                <Form.Control className="inputs" type="password" placeholder="Confirmar Password" required name="confirm"
                                    onChange={handleChange}
                                />
                                {error ?(
                                    <Button type="submit" className="mb-2 boton-reg" disabled>
                                        REGISTRARSE
                                    </Button>
                                ) : (
                                    <Button type="submit" className="mb-2 boton-reg">
                                        REGISTRARSE
                                    </Button>
                                )}
                                
                            </form>
                        </div>
                    </Col>
                    <Col>
                     <h3 className="subTitulos">Login</h3>
                        {errorLogin!=='' && (
                            <Alert show={showLogin} variant="danger">
                                {errorLogin}
                                <div className="d-flex justify-content-center">
                                    <Button onClick={() => setShowLogin(false)} variant="outline-danger">
                                        Cerrar
                                    </Button>
                                </div>
                            </Alert>
                        )}
                        <div className="contenedor">
                            <Form onSubmit={onLoginHandler}>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className="inputs" type="email" name="email_login" placeholder="Ingrese email" required onChange={handleChangeLogin} />
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="inputs" type="password" name="password_login" placeholder="Password" required onChange={handleChangeLogin}/>
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