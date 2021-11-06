import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { ButtonGroup, Button, Table } from 'react-bootstrap';
import EmployeeService from '../services/EmployeeService';

class ListEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }
        
    }
    componentDidMount(){
        EmployeeService.getEmployees()
                            .then(response => 
                                this.setState({
                                    employees: response.data
                                })
                            ).catch(error => {
                                console.log(error)
                            })
    }

    onAddEmployee = () => {
        // this.props.history.push("/add-employee")
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <div style={{padding:"0px"}}>
                        <Button variant="primary" onClick={this.onAddEmployee()}>Add Employee</Button>
                    </div>
                    <Table striped bordered hover variant="primary" >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(employee => 
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstname}</td>
                                    <td>{employee.lastname}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button variant="success"><FontAwesomeIcon icon={faEdit}/></Button>
                                            <Button variant="danger"><FontAwesomeIcon icon={faTrash}/></Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default ListEmployee;