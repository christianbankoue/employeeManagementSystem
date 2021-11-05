package com.cbankoue.employeeManagementSystem;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.cbankoue.employeeManagementSystem.model.Employee;
import com.cbankoue.employeeManagementSystem.repository.EmployeeRepository;

@SpringBootApplication
public class EmployeeManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagementSystemApplication.class, args);
	}
	
//	@Bean
//	CommandLineRunner run(EmployeeRepository employeeRepository) throws Exception {
//		
//		return args -> {
//			
//			Employee employee1 = new Employee("Christian", "Bankoue", "seniorbankoue@yahoo.fr");
//			Employee employee2 = new Employee("Romuald", "Tami", "romualdtami@yahoo.fr");
//			
//			employeeRepository.saveAll(List.of(employee1, employee2));
//		};
//	}

}
