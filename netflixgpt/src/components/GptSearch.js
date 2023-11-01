import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div className=''>
      <div className='absolute -z-10'>
      <img
          className="" src={BG_URL}
          alt="loading"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
