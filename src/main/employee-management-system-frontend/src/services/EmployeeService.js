import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees"

class EmployeeService {

    getEmployees(){

        return axios.get(EMPLOYEE_API_BASE_URL)
    }

    getEmployeeById(id) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id)
    }

    addEmployee(employee){
        // console.log(axios.post(EMPLOYEE_API_BASE_URL, employee))
        return axios.post(EMPLOYEE_API_BASE_URL, employee, {
            headers: {
              "Content-Type": "application/json",
              'Content-Encoding': 'gzip'
            }
        })
    }

    updateEmployee = async (employeeid, employee) => {

        const result = await axios.put(EMPLOYEE_API_BASE_URL + "/" + employeeid, employee, {
            headers: {
              "Content-Type": "application/json",
              'Content-Encoding': 'gzip'
            }
        })

        return result
        
    }

}

export default new EmployeeService()