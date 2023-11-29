import React from 'react'
import { StyledDivDetails, StyledDivInfos} from '../style'

import { BsFillCalendarDateFill } from 'react-icons/bs';
import { BiTime, BiMoney } from 'react-icons/bi';
import { useEffect, useState } from 'react';

import YouTube from 'react-youtube';

//Axios
import axios from 'axios';



const FilmDetails = ({filme}) => {

  const [filmesVideo, setfilmesVideo] = useState([]);

  const formataDinheiro = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }

  const formataData = (data) => {
    return data.split('-').reverse().join('/')
  }

  useEffect(() => {

    axios
      .get(`https://api.themoviedb.org/3/movie/${filme.id}/videos?api_key=fc0d1e86d240df4a0d3424c1e33e3479&language=en-US`)
      .then((res) => {
        const filmesVideo = res.data.results;
        setfilmesVideo(filmesVideo)
        console.log(filmesVideo)
      })
      .catch((err) => {
        console.error(err);
      });

  }, []);

  return (
    <StyledDivDetails>
        <h1>{filme.title}</h1>
        <YouTube videoId={`${filmesVideo[9].key}`}/>
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