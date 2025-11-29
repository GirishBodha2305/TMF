package com.example.demo.service;

import java.util.List;
import com.example.demo.entity.MovieShow;

public interface MovieShowService {
    List<MovieShow> getShowsByMovie(Long movieId);
}
