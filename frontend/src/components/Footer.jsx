import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Collapse className="justify-content-center">
                    <Navbar.Text>
                        Copyright © 2021
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Footer;