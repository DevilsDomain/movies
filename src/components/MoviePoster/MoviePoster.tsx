'use client';
import React from 'react'
import Image from 'next/image'
import '../MoviePoster/MoviePoster.css'
import { useRouter } from 'next/navigation';

function MoviePoster({image, title, rating, year, movieId}) {
  const router = useRouter();
  return (
    <div className='pos-relative'>
        <div className='text pos-absolute'>
            <p onClick={() => router.push(`/movie/${movieId}`)}>{title}</p>
            <p>{rating}</p>
            <p>{year}</p>
            <p>{movieId}</p>
        </div>
        <Image src={image} width={200} height={400} className='image'/>
    </div>
  )
}

export default MoviePoster