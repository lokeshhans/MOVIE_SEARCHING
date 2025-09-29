import MovieCard from '../components/MovieCard/MovieCard'
import './Home.css'
function Home() {
  return (
    <>
    {/* navbar */}
    {/*Movie List */}
    <div className="movie-card-wrapper">
      <MovieCard Title={"Harry Potter and the Deathly Hallows: Part 2"} Year={2020} Type={"movie"} Poster={"https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg"}/>
      <MovieCard Title={"Harry Potter and the Deathly Hallows: Part 2"} Year={2020} Type={"movie"} Poster={"https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg"}/>
      <MovieCard Title={"Harry Potter and the Deathly Hallows: Part 2"} Year={2020} Type={"movie"} Poster={"https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg"}/>
    </div>
    {/*Pagination Buttons */}
</>
)
}

export default Home