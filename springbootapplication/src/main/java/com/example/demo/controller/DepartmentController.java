package com.example.demo.controller;


import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.example.demo.entity.Department;
import com.example.demo.service.DepartmentService;




@RestController


public class DepartmentController {
	
	@Autowired
	private DepartmentService departmentservice;
	
	private final Logger LOGGER = LoggerFactory.getLogger(DepartmentController.class);

	

	
    @PostMapping("/departments")
	public Department savedepartment( @RequestBody Department department) {
    	LOGGER.info("Inside savedepartment of DepartmentController");
		return departmentservice.savedepartment(department);
	}
    
    
    @GetMapping("/departments")
    public List<Department> alldepartments(){
    	return departmentservice.alldepartments();
    }
    
    @GetMapping("/departments/{id}")
    public Department getdepartmentbyid(@PathVariable("id") Long did) {
    	return departmentservice.getdepartmentbyid(did);
    }
    
    
    @PutMapping("/departments/{id}")
    public Department updatedept(@PathVariable("id") Long did,@RequestBody Department dept) {
    	return departmentservice.updatedept(did,dept);
    	
    }
}


