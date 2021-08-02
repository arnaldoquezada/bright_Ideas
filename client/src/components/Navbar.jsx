import React from 'react';
import { Link } from "react-router-dom";

import { Navbar, Container } from 'react-bootstrap'

const Nav = () => {

    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            Inicio
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <Link to="/newIdeas">
                            Ideas
                        </Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Nav
