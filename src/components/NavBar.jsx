import React from 'react'
import { BiSolidMoviePlay } from 'react-icons/bi';
import {StyledNavBar} from '../style'

const NavBar = () => {
  return (
    <StyledNavBar>
        <h1><BiSolidMoviePlay/>    Filmes e Séries</h1>
    </StyledNavBar>
  )
}

export default NavBar