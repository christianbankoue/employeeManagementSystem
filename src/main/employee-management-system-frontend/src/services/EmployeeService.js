import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees"

class EmployeeService {

    getEmployees(){

        return axios.get(EMPLOYEE_API_BASE_URL)
    }

    AddEmployee(data){
        return axios.post(EMPLOYEE_API_BASE_URL, data)
    }

}

export default new EmployeeService()