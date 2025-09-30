import { useNavigate } from "react-router-dom";
import "./MovieCard.css";
function MovieCard({ Title, Year, Type, Poster,imdbID }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/movie/${imdbID}`);
  }
  return (
    <>
      <div className="movie-wrapper" onClick={handleClick}>
        <div className="movie-img">
          <img src={Poster} alt="" />
        </div>
        <div className="movie-title">
          <span>{Title}</span>
        </div>
        <div className="movie-year">
          <span>Realease in: {Year}</span>
        </div>
        <div className="movie-type">
          <span>{Type}</span>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
