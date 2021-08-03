import React from 'react';
import { Link } from "react-router-dom";

import { Navbar, Container } from 'react-bootstrap'

const Nav = () => {
   
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand >
                    <Link to="/">
                            Inicio
                        </Link>
                    </Navbar.Brand>                   
                    <Navbar.Brand>
                        <Link to="/newIdeas">
                            Ideas
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Bienvenido: <a href="#login">Arnaldo</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>           
        </div>
    )
}

export default Nav
