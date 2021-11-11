import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { ButtonGroup, Button, Table } from 'react-bootstrap';
import { Navigate } from 'react-router';
import EmployeeService from '../services/EmployeeService';

class ListEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }
        
        this.onAddEmployee = this.onAddEmployee.bind(this)
        this.onUpdateEmployee = this.onUpdateEmployee.bind(this);
        this.onDeleteEmployee = this.onDeleteEmployee.bind(this);
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
        <Navigate to="/add-employee" replace = {false} state={null}/>
    }

    onUpdateEmployee = (id) =>{
        // this.props.n.push(`/update-employee/${id}`)
    }

    onDeleteEmployee = (id) =>{
        
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
                                    <td>{this.state.employees.indexOf(employee) + 1}</td>
                                    <td>{employee.firstname}</td>
                                    <td>{employee.lastname}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button variant="success" onClick={(e) => this.onUpdateEmployee(employee.id)}><FontAwesomeIcon icon={faEdit}/></Button>
                                            <Button variant="danger" onClick={(e) => this.onDeleteEmployee(employee.id)}><FontAwesomeIcon icon={faTrash}/></Button>
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