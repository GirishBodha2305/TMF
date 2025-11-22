package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "movies")
public class Movie {


@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long movieId;


private String movieTitle;
private String movieImageUrl;
private String duration;
private String genre;


// Getters and Setters
public Long getMovieId() {
return movieId;
}


public void setMovieId(Long movieId) {
this.movieId = movieId;
}


public String getMovieTitle() {
return movieTitle;
}


public void setMovieTitle(String movieTitle) {
this.movieTitle = movieTitle;
}


public String getMovieImageUrl() {
return movieImageUrl;
}


public void setMovieImageUrl(String movieImageUrl) {
this.movieImageUrl = movieImageUrl;
}


public String getDuration() {
return duration;
}


public void setDuration(String duration) {
this.duration = duration;
}


public String getGenre() {
return genre;
}


public void setGenre(String genre) {
this.genre = genre;
}
}