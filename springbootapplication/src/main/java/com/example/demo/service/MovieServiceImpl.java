package com.example.demo.service;



import com.example.demo.entity.Movie;
import com.example.demo.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class MovieServiceImpl implements MovieService {


@Autowired
private MovieRepository movieRepository;


@Override
public Page<Movie> getAllMovies(Pageable pageable) {
return movieRepository.findAll(pageable);
}
}