import React from 'react';
import { BiSolidMoviePlay } from 'react-icons/bi';
import { StyledNavBar } from '../style';
import SearchFilm from '../components/SearchFilm';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <StyledNavBar>
      <Link to="/">
        <h1>
          Movies 
        </h1>
      </Link>
      <SearchFilm />
    </StyledNavBar>
  );
};

export default NavBar;