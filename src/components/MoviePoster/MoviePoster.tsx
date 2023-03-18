import React from 'react'
import Image from 'next/image'
import '../MoviePoster/MoviePoster.css'

function MoviePoster({image, title, rating, year}) {
  return (
    <div className='pos-relative'>
        <div className='text pos-absolute'>
            <p>{title}</p>
            <p>{rating}</p>
            <p>{year}</p>
        </div>
        <Image src={image} width={200} height={400} className='image'/>
    </div>
  )
}

export default MoviePoster