import '../app/page.css'
import MovieList from '@/components/MovieList/MovieList'


export default async function Home() {
  const data = await fetch('https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json')
  const res = await data.json()

  // Sort movies by rating in ascending order
  res.sort((a, b) => a.rating - b.rating)

  return (
    <main>
      <MovieList data={res} />
    </main>
  )
}

