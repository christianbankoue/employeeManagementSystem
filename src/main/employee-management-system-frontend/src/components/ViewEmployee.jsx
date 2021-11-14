import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useParams } from "react-router"
import EmployeeService from "../services/EmployeeService"

const ViewEmployee = () => {
    
    const {id} = useParams()
    const [firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [email, setEmail] = useState()

    useEffect(()=>{
        EmployeeService.getEmployeeById(id).then((res) => {
            const employee = res.data 
            setFirstName(employee.firstname)
            setLastName(employee.lastname)
            setEmail(employee.email)

        }).catch(error => {
            console.log(error)
        })
    })

    return(
        <div>
            <h2 className="text-center">View Employee page</h2>
            <Card>
                <Card.Title>
                    Firstname : {firstname} 
                </Card.Title>

                <Card.Title>
                    Laststname : {lastname} 
                </Card.Title>
                
                <Card.Title>
                        Email : {email}                    
                </Card.Title>
            </Card>
        </div>
    )
}

export default ViewEmployee;