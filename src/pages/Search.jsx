import React from 'react'
import NavBar from '../components/NavBar'

//Axios
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Search = ({props}) => {

  const location = useLocation();
  const searchTerm = location.state && location.state.searchTerm;

  useEffect(() => {

    console.log(searchTerm)

    axios
      .get(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=fc0d1e86d240df4a0d3424c1e33e3479`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err);
      });

  }, []);

  return (
    <div>
        <NavBar/>
    </div>
  )
}

export default Search