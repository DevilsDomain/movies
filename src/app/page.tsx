import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import MoviePoster from '@/components/MoviePoster/MoviePoster'


const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const data = await fetch('https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json')
  const res = await data.json()
  console.log(res)
  return (
    <main>
      {res.map((movie, movieIndex) => {
        return(
          <MoviePoster key={movieIndex} image={movie.image_url} title={movie.name} rating={movie.rating} year={movie.year}/>
        );
      })}
      <p>{res[0].year}</p>
    </main>
  )
}
