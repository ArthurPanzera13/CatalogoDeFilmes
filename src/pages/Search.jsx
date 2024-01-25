import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardFilm from '../components/CardFilm';

const Search = () => {

  const [filmes, setFilmes] = useState([]);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?query=${id}&api_key=fc0d1e86d240df4a0d3424c1e33e3479`)
        .then((res) => {
          const filmes = res.data.results;
          console.log(filmes)
          
          setFilmes(filmes);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [id]);

  return (
    <div>
      <NavBar />
      <CardFilm filme={filmes} />
    </div>
  );
};

export default Search;
