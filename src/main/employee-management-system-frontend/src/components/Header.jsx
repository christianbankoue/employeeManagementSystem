import React, { Component } from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" >
                <Container>
                    <Nav className="me-auto">
                        <Navbar.Brand href="http://localhost:3000/" className="text-light">
                            Employee Management System
                        </Navbar.Brand>
                        <Link to="/employees" className="nav-link">List Employees</Link>
                        <Link to="/add-employee" className="nav-link">Add Employee</Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default Header;