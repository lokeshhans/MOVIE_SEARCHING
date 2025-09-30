import "./MovieCard.css";
function MovieCard({ Title, Year, Type, Poster }) {
  return (
    <>
      <div className="movie-wrapper">
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
