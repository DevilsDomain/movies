import React from 'react'
import Image from 'next/image'

function MoviePoster({image, title, rating, year}) {
  return (
    <div>
        <Image src={image} width={300} height={500} />
        <p>{title}</p>
        <p>{rating}</p>
        <p>{year}</p>
    </div>
  )
}

export default MoviePoster