import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
 
  const searchMovieTMDB = async(movie)=>{
    const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS)
    const json = await data.json();
    return json.results;
  }


  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      ".give the names of 5 movies ,comma separated like the example result given ahead. Example Result :Jawan, SOTY, Heroine, Fashion , Golmal";


    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if(!gptResults.choices)
    <h1>GPT Failed , please try searching again</h1>

    // console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseArray=gptMovies.map((movie)=>searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults, "names");
    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
  };
  return (
    <div className="pt-[40%] md:pt-[10%] flex  justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className=" p-4 m-4  col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="bg-black m-2  md:m-4 md:py-2 md:px-4 col-span-3  bg-red-600 text-white rounded-lg "
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
