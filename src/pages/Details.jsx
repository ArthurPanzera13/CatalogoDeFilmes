import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { StyledDatails } from '../style';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FilmDetails from '../components/FilmDetails';

import Loading from './Loading';

const Details = () => {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [loading, setLoanding] = useState(false);

  useEffect(() => {
    setLoanding(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=fc0d1e86d240df4a0d3424c1e33e3479`)
      
      .then((res) => {
        
        setFilme(res.data);
        setLoanding(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <StyledDatails>
      <NavBar />
      {loading && <Loading/>}
      {filme && (
        <FilmDetails filme = {filme}/>
      )}
    </StyledDatails>
  );
};

export default Details;
