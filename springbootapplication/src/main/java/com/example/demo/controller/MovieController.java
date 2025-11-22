package com.example.demo.controller;


import com.example.demo.entity.Movie;
import com.example.demo.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/movies")
public class MovieController {


@Autowired
private MovieService movieService;


@GetMapping
public Page<Movie> getAllMovies(@RequestParam(defaultValue = "0") int page,
@RequestParam(defaultValue = "5") int size) {
Pageable pageable = PageRequest.of(page, size);
return movieService.getAllMovies(pageable);
}

}