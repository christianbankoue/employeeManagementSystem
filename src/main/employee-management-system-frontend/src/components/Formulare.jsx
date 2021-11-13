import {Form, Button, ButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Formulare = (props) => {

    const navigate = useNavigate()

    const onCancel = () => {
        navigate("/employees")
    }

    return (
        <Form onSubmit={(e) => props.onCreateOrUpdateEmployee(e)}>
            <Form.Group className="mb-4" controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" value={props.firstname} onChange={e => props.onFirstNameChange(e)}/>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" value={props.lastname}  onChange={e => props.onLastNameChange(e)}/>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" value={props.email}  onChange={(e) => props.onEmailChange(e)}/>
            </Form.Group>
            <ButtonGroup style={{marginBottom: "10px"}}>
                <Button variant="success" type="submit">{props.firstname !== undefined ? "Update" : "Save" }</Button>
                <Button variant="danger" type="button" style={{marginLeft: "10px"}} onClick={(e) => onCancel()}>Cancel</Button>
            </ButtonGroup>    
        </Form>
    )
}

export default Formulare;