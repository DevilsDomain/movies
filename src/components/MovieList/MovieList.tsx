"use client";
import React, { useState } from 'react';
import '../MovieList/movielist.css';
import MoviePoster from '../MoviePoster/MoviePoster';

interface Movie {
  name: string;
  image_url: string;
  rating: number;
  year: number;
  imdb_url: string;
  movieId: string; 
}

interface MovieListProps {
  data: Movie[];
}

function MovieList({ data }: MovieListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = data.filter((movie) =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='container'>
      <input placeholder='Search Movie...' value={searchQuery} onChange={handleSearch} />
      <div className='grid'>
        {filteredData.map((movie, movieIndex) => (
          <MoviePoster
            key={movieIndex}
            image={movie.image_url}
            title={movie.name}
            rating={movie.rating}
            year={movie.year}
            movieId={movie.imdb_url.slice(7)}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
