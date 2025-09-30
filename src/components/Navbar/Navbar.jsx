import React, { useState } from "react";
import "./Navbar.css";
import useMovieList from "../../hooks/useMovieList";
import useDebounce from "../../hooks/useDebounce";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  // const resultList = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { movieList } = useMovieList(!searchText ? "har" : searchText);
  const navigator = useNavigate();

  const handleAutoCompleteClick = (e, imdbID) => {
    console.log(e.target);
    console.log(imdbID);
    navigator(`/movie/${imdbID}`);
    
  };
  return (
    <>
      <div className="navbar-wrapper">
        <div className="heading">
          <Link to={'/'} >Movie Base</Link>
        </div>
        <div className="search-box">
          <input
            type="text"
            onChange={useDebounce((e) => setSearchText(e.target.value))}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
            placeholder="Search Novie by name...."
          />
          <div
            className="search-box-result"
            style={{ display: isVisible ? "block" : "none" }}
          >
            {/* <div>{searchText}</div> */}
            {movieList.length > 0 &&
              movieList.map((movie) => (
                
                <div
                  onMouseDown={(e) => handleAutoCompleteClick(e, movie.imdbID)}
                  key={movie.imdbID}
                  className="search-box-result-item"
                >
                  {movie.Title}
                </div>
              ))}
          </div>
        </div>
        <div className="theme">
          <button>Dark</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
