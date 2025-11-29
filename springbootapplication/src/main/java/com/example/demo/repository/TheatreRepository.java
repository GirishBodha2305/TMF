package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Theatre;

public interface TheatreRepository extends JpaRepository<Theatre, Long> {
	
	
}
