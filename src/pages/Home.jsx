import axios from 'axios'
import MovieCard from '../components/MovieCard/MovieCard'
import './Home.css'
import {MovieSearch} from '../apis/MovieSearch'
import { useEffect, useState } from 'react'
function Home() {

  const [movieList, setMovieList] = useState([])

  async function downloadDefaultMovies(...args){
    const urls = args.map(url => MovieSearch(url));
    const requests = await axios.all(urls.map(url => axios.get(url)));
    const allMovies = requests.map(movieResponse => movieResponse.data.Search);
    console.log([].concat(...allMovies));
    setMovieList([].concat(...allMovies));
  }
  useEffect(()=>{
    downloadDefaultMovies('harry','spider','avengers')
  },[]);
  return (
    <>
    {/* navbar */}
    {/*Movie List */}
    <div className="movie-card-wrapper">
      {movieList.length > 0 && movieList.map((movie)=><MovieCard  key={movie.imdbID} {...movie}/>)}
    </div>
    {/*Pagination Buttons */}
</>
)
}

export default Home