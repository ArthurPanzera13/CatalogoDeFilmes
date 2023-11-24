import React from 'react'
import {StyledDivCard, StyledDivContainer, StyledDivInfosCard, StyledDivNota, StyledButtonDetalhes} from '../style'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardFilm = ({filme}) => {

  return (
    <StyledDivContainer>
      {filme.map((filme) => (
          <StyledDivCard>
            <div>
              <img src={`http://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.poster_path} />
            </div>
            <StyledDivInfosCard>
            <h3>{filme.title}</h3>
              <p>{filme.overview}</p>
              <StyledDivNota>
                <p>Nota: {filme.vote_average}<FaStar/></p>
              </StyledDivNota>
            </StyledDivInfosCard>
            <div>
              <Link to={`/details/${filme.id}`}><StyledButtonDetalhes><strong>Mais Detalhes</strong></StyledButtonDetalhes></Link>
            </div>
            
          </StyledDivCard>
        ))}
    </StyledDivContainer>
    
  )
}

export default CardFilm