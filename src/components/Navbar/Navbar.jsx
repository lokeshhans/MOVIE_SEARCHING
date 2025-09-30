import React, {  useState } from 'react'
import './Navbar.css'
import useMovieList from '../../hooks/useMovieList';
function Navbar() {

  // const resultList = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const {movieList} = useMovieList(!searchText ? 'har' : searchText);
  return (
    <>
    <div className='navbar-wrapper'>
        <div className="heading">
            Movie Base
        </div>
        <div className="search-box">
            <input type="text"
            onChange={(e)=>setSearchText(e.target.value)}
            onFocus={()=>setIsVisible(true)}
            onBlur={()=>setIsVisible(false)}
            placeholder='Search Novie by name....' />
            <div className="search-box-result" style={{display:(isVisible) ? 'block': 'none'}}>
              {movieList.length > 0 && movieList.map(movie=><div key={movie.imdbID} className="search-box-result-item">{movie.Title}</div>)}
            </div>
        </div>
        <div className="theme">
            <button>Dark</button>
        </div>
    </div>
    </>
  )
}

export default Navbar