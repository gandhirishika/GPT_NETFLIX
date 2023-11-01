import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constant';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store)=>store.movies.useTopRatedMovies);
    
    const getTopRatedMovies = async () =>{
        const data= await fetch('https://api.themoviedb.org/3/movie/popular?&page=2', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
   useEffect(()=>{
   !topRatedMovies && getTopRatedMovies();
   },[])
  return (
    <div>
      
    </div>
  )
}

export default useTopRatedMovies
