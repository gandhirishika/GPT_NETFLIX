// import React, { useEffect } from 'react'
// import {API_OPTIONS} from '../utils/constant'
// import { useDispatch, useSelector } from 'react-redux'
// import { addTrailerVideo } from '../utils/movieSlice';

// const useMovieTrailer = ({movieId}) => {
//     const dispatch = useDispatch();
//     const trailerVideo = useSelector((store) => store.movies.trailerVideo);

//   const getMovieVideos = async () =>{
//     const data = await fetch(`https://api.themoviedb.org/3/movie/`+movieId +`/videos?language=en-US`, API_OPTIONS);
//     const json = await data.json();
//     console.log(json);
//     const filterData = json.results?.filter((video) => video.type === "Trailer");
//     const trailer = filterData.length>0 ? filterData[0] : json.results[0];
//     dispatch(addTrailerVideo(trailer));
//   }

//   useEffect(()=>{
//  trailerVideo && getMovieVideos();(this was not trailervieosd)
//   },[]);
//   return (
//     <div>

//     </div>
//   )
// }

// export default useMovieTrailer
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[1] : json.results[1];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
