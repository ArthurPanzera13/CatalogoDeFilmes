import React from 'react'

import { StyledBusca, StyledContainerNav } from '../style';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const SearchFilm = () => {

  // const [search, setSearch] = useState("");
  const [search, setSearch] = useState( "")

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      window.location.href = `/search/${search}`; 
    }
  }

  return (
    <StyledContainerNav>
        <StyledBusca  onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyPress} value={search} type="text" name="" id="" placeholder="Search Movie..." />
    </StyledContainerNav>
  )
}

export default SearchFilm