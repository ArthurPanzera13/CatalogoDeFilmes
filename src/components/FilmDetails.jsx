import React from 'react'
import { StyledDivDetails, StyledDivInfos} from '../style'

import { BsFillCalendarDateFill } from 'react-icons/bs';
import { BiTime, BiMoney } from 'react-icons/bi';

const FilmDetails = ({filme}) => {

  const formataDinheiro = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }

  const formataData = (data) => {
    return data.split('-').reverse().join('/')
  }

  return (
    <StyledDivDetails>
        <h1>{filme.title}</h1>
        <img src={`http://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.poster_path} />
        <StyledDivInfos>
          <BsFillCalendarDateFill/><h3>Data de Lançamento: {formataData(filme.release_date)}</h3>
        </StyledDivInfos>
        <StyledDivInfos>
          <BiTime/><h3>Duração do Filme: {filme.runtime} minutos</h3>
        </StyledDivInfos>
        <StyledDivInfos>
          <BiMoney/><h3>Receita: {formataDinheiro(filme.revenue)}</h3>
        </StyledDivInfos>
        <StyledDivInfos>
          <BiMoney/><h3>Orçamento: {formataDinheiro(filme.budget)}</h3>
        </StyledDivInfos>
        <StyledDivInfos>
          <h2>Descrição: {filme.overview}</h2>
        </StyledDivInfos>    
    </StyledDivDetails>
  )
}

export default FilmDetails