package com.example.demo.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Department;
import com.example.demo.repository.DepartmentRepository;

@Service
public class DepartmentServiceIpml implements DepartmentService {

	@Autowired
	private DepartmentRepository departmentrepository;
	@Override
	public Department savedepartment(Department department) {
		// TODO Auto-generated method stub
		return departmentrepository.save(department);
		
	}
	@Override
	public List<Department> alldepartments() {
		// TODO Auto-generated method stub
		return departmentrepository.findAll();
	}
	@Override
	public Department getdepartmentbyid(Long did) {
		// TODO Auto-generated method stub
		return departmentrepository.findById(did).get();
	}
	@Override
	public Department updatedept(Long did, Department dept) {
		// TODO Auto-generated method stub
		
		Department depdb = departmentrepository.findById(did).get();
		if(Objects.nonNull(dept.getDepartmentName()) && !"".equalsIgnoreCase(dept.getDepartmentName())) {
			depdb.setDepartmentName(dept.getDepartmentName());
		}
		if(Objects.nonNull(dept.getDepartmentAddress()) && !"".equalsIgnoreCase(dept.getDepartmentAddress())) {
			depdb.setDepartmentAddress(dept.getDepartmentAddress());
		}
		if(Objects.nonNull(dept.getDepartmentCode()) && !"".equalsIgnoreCase(dept.getDepartmentCode())) {
			depdb.setDepartmentCode(dept.getDepartmentCode());
		}
		return departmentrepository.save(depdb);
	}
	
}
