import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { ButtonGroup,Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ListEmployees = () =>{

    const navigate = useNavigate()

    const onAddEmployee = () => {
        // <Navigate to="/add-employee" replace = {false} state={null}/>
        navigate(`/add-employee`)
    }

    const onUpdateEmployee = (id) =>{
        navigate(`/update-employee/${id}`)
    }

    const onDeleteEmployee = (id) =>{
        
    }

    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        EmployeeService.getEmployees()
                            .then(response => setEmployees(employees => employees = response.data))
                            .catch(error => console(error))
    }, [])

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div className="row">
                <div style={{padding:"0px"}}>
                    <Button variant="primary" onClick={e => onAddEmployee()}>Add Employee</Button>
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
                            employees.map(employee => 
                            <tr key={employee.id}>
                                <td>{employees.indexOf(employee) + 1}</td>
                                <td>{employee.firstname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <ButtonGroup>
                                        <Button variant="success" onClick={(e) => onUpdateEmployee(employee.id)}><FontAwesomeIcon icon={faEdit}/></Button>
                                        <Button variant="danger" onClick={(e) => onDeleteEmployee(employee.id)}><FontAwesomeIcon icon={faTrash}/></Button>
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

export default ListEmployees;