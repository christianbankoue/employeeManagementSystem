import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { ButtonGroup,Button, Table} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ListEmployees = () =>{

    const navigate = useNavigate()
    const [loanding, setLoading] = useState(true)

    const onAddEmployee = () => {
        navigate(`/add-employee/_add`)
    }

    const onUpdateEmployee = (id) =>{
        navigate(`/add-employee/${id}`)
    }
    
    const [employees, setEmployees] = useState([])

    const onDeleteEmployee = (id) =>{
        EmployeeService.deleteEmployee(id).then(()=>{
            setEmployees (employees.filter((employee) => employee.id !== id))
            // navigate("/employees")
        }).catch((error) => {
            console.log(error)
        })   
    }  

    useEffect(()=>{
        setTimeout(()=>{
            EmployeeService.getEmployees()
                                .then(response => setEmployees(employees => employees = response.data))
                                .catch(error => console(error))
            setLoading(false)
        }, 100)
        
    }, [])

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div className="row">
                <div style={{padding:"0px"}}>
                    <Button variant="primary" onClick={e => onAddEmployee()}>Add Employee</Button>
                </div>
                {loanding ? 
                    <div className="text-center">
                    </div> :
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
                                            <Button variant="primary" onClick={(e) => onUpdateEmployee(employee.id)}><FontAwesomeIcon icon={faEdit}/></Button>
                                            <Button variant="danger" onClick={(e) => onDeleteEmployee(employee.id)}><FontAwesomeIcon icon={faTrash}/></Button>
                                            <Button variant="success" onClick={(e) => navigate(`/view-employee/${employee.id}`)}><FontAwesomeIcon icon={faEye}/></Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </Table> 
                }
            </div>
        </div>
    );
}

export default ListEmployees;