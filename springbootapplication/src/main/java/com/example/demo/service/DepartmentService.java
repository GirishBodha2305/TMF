package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Department;

public interface DepartmentService {

	public Department savedepartment(Department department);

	public List<Department> alldepartments();

	public Department getdepartmentbyid(Long did);

	public Department updatedept(Long did, Department dept);

	
	
}

