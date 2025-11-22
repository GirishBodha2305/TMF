package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.MovieShow;

public interface MovieShowRepository extends JpaRepository<MovieShow, Long> {
    List<MovieShow> findByMovie_MovieId(Long movieId);
}
