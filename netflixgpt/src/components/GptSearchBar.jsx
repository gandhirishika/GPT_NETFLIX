import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const langKey= useSelector((store)=>store.config.lang);
  const  searchText= useRef();
  const handleGptSearchClick = () =>{
  console.log(searchText.current.value)
  }
  return (
    <div className="pt-[10%] flex  justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText}
          className=" p-4 m-4  col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="bg-black m-4 py-2 px-4 col-span-3 bg-red-600 text-white rounded-lg " onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
