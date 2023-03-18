'use client';
import React from 'react'
import 'src/app/movie/[movieId]/page.css'

function page({ params }) {
  return (
    <p>Movie detail {params.movieId}</p>
  )
}

export default page