import React, {useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import EmployeeService from '../services/EmployeeService';
import Formulare from './Formulare';

const UpdateEmployee = (props) => {
    
    const {id} = useParams();
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    useEffect(
        () => {
            EmployeeService.getEmployeeById(id).then(
                response => {
                    const employee = response.data 
                    setFirstName(employee.firstname)
                    setLastName(employee.lastname)
                    setEmail(employee.email)
                }   
            )
        }, [])
    
    const onUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {
            firstname: firstname,
            lastname: lastname,
            email: email
        }

        console.log(employee)
        
        EmployeeService
                    .updateEmployee(id, JSON.stringify(employee)).then( 
                        navigate("/employees")
                        )
                .catch(error => {
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
                
                <h2 className="text-center">Edit Employee</h2>
                <Formulare 
                    firstname = {firstname} 
                    lastname = {lastname} 
                    email = {email} 
                    onCreateOrUpdateEmployee = {onUpdateEmployee} 
                    onFirstNameChange={(e) => onFirstNameChange(e)}
                    onLastNameChange={(e) => onLastNameChange(e)} 
                    onEmailChange={(e) => onEmailChange(e)}
                    />
            </Container>
        );
}

export default UpdateEmployee;