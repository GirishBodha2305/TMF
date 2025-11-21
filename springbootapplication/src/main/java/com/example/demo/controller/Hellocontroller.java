package com.example.demo.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hellocontroller {

	
	@GetMapping("/ew")
	public String hello() {
		return "HI Hello Namste!!!! BYE!!!!";
	}
}
