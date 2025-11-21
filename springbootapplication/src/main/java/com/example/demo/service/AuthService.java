package com.example.demo.service;


import com.example.demo.entity.Users;



public interface AuthService {

	Users register(Users user);

	boolean login(String email, String password);

}


