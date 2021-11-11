import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import EmployeeService from '../services/EmployeeService';
import Formulare from './Formulare';

const CreateEmployee = () => {

    const navigate = useNavigate()
    
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    

    const onCreateEmployee = (e) => {
        e.preventDefault();
        
        const employee = {
            firstname: firstname,
            lastname: lastname,
            email: email
        }

        EmployeeService.addEmployee(JSON.stringify(employee))
            .then( () =>{
                navigate("/employees")
            }
       
                ).catch(error => {
                console.log(error)
            })
    }

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const onLastNameChange = (e) => {
        setLastName(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    return (
        <Container style={{border: "1px solid grey"}}>
            
            <h2 className="text-center">Add Employee</h2>
            <Formulare 
                onCreateOrUpdateEmployee = {onCreateEmployee} 
                onFirstNameChange={(e) => onFirstNameChange(e)}
                onLastNameChange={(e) => onLastNameChange(e)} 
                onEmailChange={(e) => onEmailChange(e)}
                />
        </Container>
    );
}

export default CreateEmployee;