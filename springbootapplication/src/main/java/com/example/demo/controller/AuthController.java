package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Users;
import com.example.demo.service.AuthService;





@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
	
	
	@Autowired
	private AuthService authservice;
	
	
	@PostMapping("/register")
	public Users register(@RequestBody Users user) {
		return authservice.register(user);
		
	}
	
	@PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Users user) {

        boolean isValid = authservice.login(user.getEmail(), user.getPassword());

        if (isValid) {
            return ResponseEntity.ok("Login Successful");
        } else {
            return ResponseEntity.status(401).body("Invalid Email or Password");
        }
    }

}

