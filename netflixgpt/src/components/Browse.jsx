import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import useTopRatedMovies from '../hooks/useTopRatedMovies';

const Browse = () => {
  const showGptSearch = useSelector((store) =>store.gpt.showGptSearch)
 useNowPlayingMovies();
 usePopularMovies();
useTopRatedMovies();
   return (
    <>    
    <Header/>
    {showGptSearch?
    <GptSearch/>:
    <> 
    <MainContainer/>
    <SecondaryContainer/>
    </>}
   
    </>

  )
}

export default Browse
