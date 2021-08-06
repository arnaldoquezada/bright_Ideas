import React from 'react';
import { Link } from "react-router-dom";

import { Navbar, Container } from 'react-bootstrap'
import { useLocalStorage } from '../hooks/useLocalStorage';


const Nav = () => {
    const { getItemFromLocalStorage } = useLocalStorage();
    const alias = getItemFromLocalStorage('alias');
   
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
                            Bienvenido: {alias}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>           
        </div>
    )
}

export default Nav
