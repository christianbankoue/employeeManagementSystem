import React, { Component } from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" >
                <Container>
                    <Nav className="me-auto" className="navbar-expand-md">
                        <Navbar.Brand href="http://localhost:3000/" className="text-light">
                            Employee Management System
                        </Navbar.Brand>
                        <Container></Container>
                        <Nav.Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default Header;