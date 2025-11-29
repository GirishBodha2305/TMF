package com.example.demo.service;



import com.example.demo.entity.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface MovieService {
Page<Movie> getAllMovies(Pageable pageable);
}