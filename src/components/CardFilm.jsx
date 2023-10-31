import React from 'react'
import {StyledDivCard, StyledDivContainer} from '../style'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardFilm = ({filme}) => {

  return (
    <StyledDivContainer>
      {filme.map((filme) => (
          <StyledDivCard>
            <h3>{filme.title}</h3>
            <img src={`http://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.poster_path} />
            <p><FaStar/>   {filme.vote_average}</p>
            <Link to={`/details/${filme.id}`}><button><strong>Mais Detalhes</strong></button></Link>
          </StyledDivCard>
        ))}
    </StyledDivContainer>
    
  )
}

export default CardFilm