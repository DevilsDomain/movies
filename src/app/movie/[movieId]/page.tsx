import React from 'react'
import 'src/app/movie/[movieId]/page.css'
import Image from 'next/image'

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
      <Image src={movie.image_url} height={500} width={300} />
      <p>{movie.desc}</p>
      <p>{movie.rating}</p>
      <p>{movie.year}</p>
      <p>Actors</p>
      <ul>
        {movie.actors.map((actor, actorIndex) => {
            return(
                <li key={actorIndex}>{actor}</li>
            );
        })}
      </ul>
      <p>Genre</p>
      <ul>
        {movie.genre.map((genre, genreId) => {
            return(
                <li key={genreId}>{genre}</li>
            );
        })}
      </ul>
      <p>Directors</p>
      <ul>
        {movie.directors.map((director, directorId) => {
            return(
                <li key={directorId}>{director}</li>
            );
        })}
      </ul>
    </div>
  )
}
