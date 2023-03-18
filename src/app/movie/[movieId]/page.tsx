import React from 'react'
import 'src/app/movie/[movieId]/page.css'
import Image from 'next/image'

interface Movie {
    imdb_url: string;
    name: string;
    image_url: string;
    desc: string;
    rating: number;
    year: string;
    actors: string[];
    genre: string[];
    directors: string[];
  }
  
  interface PageProps {
    params: {
      movieId: string;
    };
  }
  

export default async function page({ params }: PageProps) {
  const data = await fetch('https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json')
  const res = await data.json()

  // Find the movie with the matching ID
  const movie = res.find((m: Movie) => m.imdb_url.slice(7) === `${params.movieId}/`)

  if (!movie) {
    return <p>Movie not found</p>
  }

  return (
    <div>
      <p>{movie.name}</p>
      <Image src={movie.image_url} height={500} width={300} alt=''/>
      <p>{movie.desc}</p>
      <p>{movie.rating}</p>
      <p>{movie.year}</p>
      <p>Actors</p>
      <ul>
        {movie.actors.map((actor: string, actorIndex: number) => {
            return(
                <li key={actorIndex}>{actor}</li>
            );
        })}
      </ul>
      <p>Genre</p>
      <ul>
        {movie.genre.map((genre: string, genreId: number) => {
            return(
                <li key={genreId}>{genre}</li>
            );
        })}
      </ul>
      <p>Directors</p>
      <ul>
        {movie.directors.map((director: string, directorId: number) => {
            return(
                <li key={directorId}>{director}</li>
            );
        })}
      </ul>
    </div>
  )
}
