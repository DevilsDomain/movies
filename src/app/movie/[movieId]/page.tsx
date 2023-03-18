import React from 'react'
import 'src/app/movie/[movieId]/page.css'

export default async function page({ params }) {
  const data = await fetch('https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json')
  const res = await data.json()

  // Find the movie with the matching ID
  const movie = res.find((m) => m.imdb_url.slice(7) === `${params.movieId}/`)

  if (!movie) {
    return <p>Movie not found</p>
  }

  return (
    <div>
      <p>{movie.name}</p>
    </div>
  )
}
