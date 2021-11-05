package com.cbankoue.employeeManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cbankoue.employeeManagementSystem.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
