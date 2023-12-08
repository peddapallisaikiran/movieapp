import React from 'react';
import Suggestions from '../Components.js/Suggestions';
import { useSelector } from 'react-redux';

const SearchMovieSuggestion = () => {
    const { search } = useSelector((store)=> store);

    // console.log(search.isFecthing)

  return (<Suggestions movies={search}/>)

}

export default SearchMovieSuggestion;
