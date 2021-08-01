import React from 'react';

import { Navbar, Container } from 'react-bootstrap'

const Nav = () => {

    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Nav
