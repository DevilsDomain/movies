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
    <div className='container'>
        <div>
            <Image src={movie.image_url} height={700} width={500} alt='' className='image'/>
        </div>
        <div className='info'>
            <h1>{movie.name}</h1>
            <h3>{movie.desc}</h3>
            <h4>Rating: {movie.rating}</h4>
            <h4>Released: {movie.year}</h4>
            <h4>Actors</h4>
            <ul>
                {movie.actors.map((actor: string, actorIndex: number) => {
                    return(
                        <li key={actorIndex}>{actor}</li>
                    );
                })}
            </ul>
            <h4>Genre</h4>
            <ul>
                {movie.genre.map((genre: string, genreId: number) => {
                    return(
                        <li key={genreId}>{genre}</li>
                    );
                })}
            </ul>
            <h4>Directors</h4>
            <ul>
                {movie.directors.map((director: string, directorId: number) => {
                    return(
                        <li key={directorId}>{director}</li>
                    );
                })}
            </ul>
        </div>
    </div>
  )
}
