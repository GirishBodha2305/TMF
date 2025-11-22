package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.MovieShow;
import com.example.demo.service.MovieShowService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ShowController {

    @Autowired
    private MovieShowService showService;

    @GetMapping("/movies/{movieId}/shows")
    public List<MovieShow> getShows(@PathVariable Long movieId) {
        return showService.getShowsByMovie(movieId);
    }
}