package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Users;
import com.example.demo.repository.UserRepository;


@Service
public class AuthServiceImpl implements AuthService {
	
	
	@Autowired
	UserRepository userrepository;

	@Override
	public Users register(Users user) {
		// TODO Auto-generated method stub
		return userrepository.save(user);
	}

	@Override
	public boolean login(String email, String password) {
		// TODO Auto-generated method stub
		Users user = userrepository.findByEmail(email);
		
		if(user==null) {
			return false;
		}
		return user.getPassword().equals(password);
	}

}
