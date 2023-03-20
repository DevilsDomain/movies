import '../app/page.css'
import MovieList from '@/components/MovieList/MovieList'

interface Movie {
  rating: number;

}


export default async function Home() {
  const data = await fetch('https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json')
  const res = await data.json()

  // Sort movies by rating in ascending order
  res.sort((a: Movie, b: Movie) => a.rating - b.rating);
  return (
    <main>
      <MovieList data={res} />
    </main>
  )
}

