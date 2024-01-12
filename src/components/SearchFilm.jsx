import React from 'react'

import { StyledBusca, StyledContainerNav } from '../style';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SearchFilm = () => {

  const [search, setSearch] = useState("");

  return (
    <StyledContainerNav>
        <StyledBusca onChange={(e) => setSearch(e.target.value)} value={search} type="text" name="" id="" placeholder="Search Movie..." /><Link to={{pathname: `/search/`, state: { searchTerm: search }}} key={search}><button>Buscazada</button></Link>  
    </StyledContainerNav>
  )
}

export default SearchFilm