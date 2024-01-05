import React from 'react';
import { StyledDivCard, StyledDivContainer, StyledDivInfosCard, StyledDivNota, StyledTeste, StyledImageFilm } from '../style';
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CardFilm = ({ filme }) => {

  const formataData = (nota) => {
    return nota.toFixed(1);
  }
  

  return (
    <StyledDivContainer>
      {filme.map((filme) => (
        <Link to={`/details/${filme.id}`} key={filme.id}>
          <StyledDivCard>
            <StyledImageFilm>
              <img src={`http://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.poster_path} />
            </StyledImageFilm>
            <StyledDivInfosCard>
              <StyledTeste>
                <h3>{filme.title}</h3>
                <p>{filme.overview}</p>
              </StyledTeste>
              
            </StyledDivInfosCard>
            <StyledDivNota>
                <strong>Average {formataData(filme.vote_average)}<IoIosStar style={{
                  color: '#ffbf00'
                }} /></strong>
              </StyledDivNota>
          </StyledDivCard>
        </Link>
      ))}
    </StyledDivContainer>
  );
}

export default CardFilm;