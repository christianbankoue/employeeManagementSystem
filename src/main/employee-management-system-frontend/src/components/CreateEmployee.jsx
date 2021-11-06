import React, { Component } from 'react';
import {Container, Form, Button, ButtonGroup } from 'react-bootstrap';
import EmployeeService from '../services/EmployeeService';

class CreateEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email:""
        }
        // this.firstname = React.createRef();
        // this.lastname = React.createRef();
        // this.email = React.createRef();
        this.onCreateEmployee = this.onCreateEmployee.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
    }
    
    onCreateEmployee = (e) => {
        e.preventDefault();

        const employee = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email
        }
        
        EmployeeService.AddEmployee(JSON.stringify(employee))
            // .then(this.props.history.push("/employee"))
            .catch(error => {
                console.log(error)
            })
    }

    onFirstNameChange = (e) => {
        this.setState({
            firstname: e.target.value
        })
    }

    onLastNameChange = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    render() {
        return (
            <Container style={{border: "1px solid grey"}}>
                
                <h2 className="text-center">Add Employee</h2>
                <Form onSubmit={(e) => this.onCreateEmployee(e)}>
                    <Form.Group className="mb-4" controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" value={this.state.firstname} ref={this.firstname}  onChange={e => this.onFirstNameChange(e)}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" value={this.state.lastname} ref={this.lastname}  onChange={e => this.onLastNameChange(e)}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" value={this.state.email} ref={this.email} onChange={(e) => this.onEmailChange(e)}/>
                    </Form.Group>
                    <ButtonGroup style={{marginBottom: "10px"}}>
                        <Button variant="success" type="submit">Save</Button>
                        <Button variant="danger" type="button" style={{marginLeft: "10px"}}>Cancel</Button>
                    </ButtonGroup>    
                </Form>
            </Container>
        );
    }
}

export default CreateEmployee;