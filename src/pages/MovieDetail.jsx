import axios from "axios";
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
  
    {movie && 
      < MovieCard 
        Title={movie.Title} 
        Year={movie.Year} 
        Poster={movie.Poster} 
        Type={movie.Type}
      />
    }
  </>;
}

export default MovieDetail;
