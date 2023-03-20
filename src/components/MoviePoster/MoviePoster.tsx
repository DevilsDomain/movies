'use client';
import React from 'react';
import Image from 'next/image';
import '../MoviePoster/MoviePoster.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface MoviePosterProps {
    image: string;
    title: string;
    rating: number;
    year: number;
    movieId: number;
  }
  

function MoviePoster({ image, title, rating, year, movieId } :MoviePosterProps) {
  const router = useRouter();
  const [fave, setFave] = useState<boolean>(false);

  const handleFavorite = () => {
    setFave(!fave);
  };


  return (
    <div className='pos-relative'>
      <div className='text pos-absolute'>
        <p onClick={() => router.push(`/movie/${movieId}`)}>{title}</p>
        <p>{rating}⭐️</p>
        <p>{year}</p>
      </div>
      <Image src={image} width={200} height={400} className='image' alt={title}/>
      {fave ? (
        <div onClick={handleFavorite}><h4>Remove❌</h4></div>
      ) : (
        <div onClick={handleFavorite}><h4>Add✅</h4></div>
      )}
    </div>
  );
}

export default MoviePoster;
