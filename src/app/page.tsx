import Image from 'next/image'
import { Inter } from 'next/font/google'
import '../app/page.css'
import MoviePoster from '@/components/MoviePoster/MoviePoster'


const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const data = await fetch('https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json')
  const res = await data.json()

  // Sort movies by rating in ascending order
  res.sort((a, b) => a.rating - b.rating)

  return (
    <main>
      <div className='grid'>
        {res.map((movie, movieIndex) => (
          <MoviePoster key={movieIndex} image={movie.image_url} title={movie.name} rating={movie.rating} year={movie.year} />
        ))}
      </div>
    </main>
  )
}

