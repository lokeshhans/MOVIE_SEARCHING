import axios from "axios";
import "./MovieDetail.css";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { MovieSearchById } from "../apis/MovieSearch";
import MovieCard from "../components/MovieCard/MovieCard";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [query] = useSearchParams();

  async function fetchMovieDeatail() {
    const response = await axios.get(MovieSearchById(id));
    console.log(response.data);
    setMovie(response.data);
  }

  useEffect(() => {
    fetchMovieDeatail();
    console.log(query.get("abc"));
  },[id]);

  return <>
    <div className="movie-detail-page">
        {movie && 
          < MovieCard 
            Title={movie.Title} 
            Year={movie.Year} 
            Poster={movie.Poster} 
            Type={movie.Type}
          />
        }
      <div className="movie-detail">
        <span>Movie Details</span> <br />
        Plot: {movie?.Plot} <br />
        Director: {movie?.Director} <br />
        Actors: {movie?.Actors} <br />
        Writer: {movie?.Writer} <br />
        Year: {movie?.Year} <br />
        Released: {movie?.Released} <br />
        Runtime: {movie?.Runtime} <br />
        Genre: {movie?.Genre} <br />  
        Awards: {movie?.Awards} <br />
      </div>
    </ div>;
  </>
}

export default MovieDetail;
