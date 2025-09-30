import axios from 'axios';
import  { useEffect, useState } from 'react'
import {MovieSearch} from '../apis/MovieSearch';

function useMovieList(...args) {
    const [movieList, setMovieList] = useState([])

    async function downloadDefaultMovies(...args){
        try {
            const urls = args.map(url => MovieSearch(url));
            const requests = await axios.all(urls.map(url => axios.get(url)));
            if(requests[0].data.Error){
                setMovieList([]);
            }else{
                const allMovies = requests.map(movieResponse => movieResponse.data.Search);
                setMovieList([].concat(...allMovies));
            }
        } catch (error) {
            console.log("API REQUEST FAILED");
        }
       
  }
  useEffect(()=>{
    downloadDefaultMovies(...args)
  },[...args]);
  return {movieList}
  
}

export default useMovieList