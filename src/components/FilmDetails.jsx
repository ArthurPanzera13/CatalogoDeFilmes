import React from 'react'
import { StyledDivDetails, StyledDivInfos, StyledDivVideo} from '../style'

import { BsFillCalendarDateFill } from 'react-icons/bs';
import { BiTime, BiMoney } from 'react-icons/bi';
import { useEffect, useState } from 'react';

import YouTube from 'react-youtube';

//Axios
import axios from 'axios';


const FilmDetails = ({filme}) => {

  const [filmesVideo, setfilmesVideo] = useState([]);
  const [chaveTrailer, setChaveTrailer] = useState('');

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

        const indiceTrailerOficial = filmesVideo.findIndex(filmesVideo => filmesVideo.name === 'Official Trailer' || filmesVideo.name === 'Teaser Trailer' || filmesVideo.name === 'Original Trailer');

        const chaveDoTrailerOficial = indiceTrailerOficial !== -1 ? filmesVideo[indiceTrailerOficial].key : filmesVideo[0].key;

        setChaveTrailer(chaveDoTrailerOficial)

      })
      .catch((err) => {
        console.error(err);
      });

  }, []);

  return (
    <StyledDivDetails>
        <h1>{filme.title}</h1>
        <StyledDivVideo>
          <YouTube videoId={filmesVideo.length > 0 ? chaveTrailer : ''} />
        </StyledDivVideo> 
        <StyledDivInfos>
          <BsFillCalendarDateFill/><h3>Release Date: {formataData(filme.release_date)}</h3>
        </StyledDivInfos>
        <StyledDivInfos>
          <BiTime/><h3> Film Duration: {filme.runtime} minutos</h3>
        </StyledDivInfos>
        <StyledDivInfos>
          <BiMoney/><h3>Revenue: {formataDinheiro(filme.revenue)}</h3>
        </StyledDivInfos>
        <StyledDivInfos>
          <BiMoney/><h3>Budget: {formataDinheiro(filme.budget)}</h3>
        </StyledDivInfos>
        <StyledDivInfos>
          <h2>Description: {filme.overview}</h2>
        </StyledDivInfos>    
    </StyledDivDetails>
  )
}

export default FilmDetails