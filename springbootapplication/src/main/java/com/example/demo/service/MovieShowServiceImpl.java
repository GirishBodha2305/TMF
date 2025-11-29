package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.MovieShow;
import com.example.demo.repository.MovieShowRepository;

@Service
public class MovieShowServiceImpl implements MovieShowService {

    @Autowired
    private MovieShowRepository movieShowRepository;

    @Override
    public List<MovieShow> getShowsByMovie(Long movieId) {
        return movieShowRepository.findByMovie_MovieId(movieId);
    }
}
