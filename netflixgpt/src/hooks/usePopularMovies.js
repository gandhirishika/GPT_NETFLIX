import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies} from "../utils/movieSlice";
import { useEffect } from "react";
const usePopularMovies = () => {
  //fetch data and update the store
  const dispatch = useDispatch();
  const popularMovies = useSelector((store)=>store.movies.popularMovies)
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=3",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
   !popularMovies && getPopularMovies();
  }, []);
  return <></>;
};

export default usePopularMovies;