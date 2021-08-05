import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar class="navbar" bg="danger" variant="dark">
            <Container>
                <Navbar.Brand>Manga Rosa</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;