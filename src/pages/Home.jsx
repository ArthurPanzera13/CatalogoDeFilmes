import React from 'react'

//Axios
import axios from 'axios';

import { useEffect, useState } from 'react';
import CardFilm from '../components/CardFilm'
import NavBar from '../components/NavBar'
import { StyledButtonNext} from '../style'
import Loading from './Loading';
import Rodape from '../components/Rodape'

const Home = () => {

  const [filmes, setfilmes] = useState([]);
  const [pagina, setPagina] = useState(1)
  

  function proximaPagina(){
    setPagina(pagina + 1);
    window.scrollTo(0, 0);

    return pagina
  }

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Fazer uma solicitação para obter uma lista de filmes populares
    setLoading(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=fc0d1e86d240df4a0d3424c1e33e3479&page=${pagina}`)
      .then((res) => {
        const filmes = res.data.results;

        setfilmes(filmes);
        setLoading(false);

        console.log(res)
      })
      .catch((err) => {
        console.error(err);
      });
      setLoading(true);
  }, [pagina]);

  return (
    <div>
      <NavBar/>
      <div>
        {loading ? <Loading /> : (
        <>
          <CardFilm filme={filmes} />
          <StyledButtonNext onClick={proximaPagina}><strong>Próxima Página</strong></StyledButtonNext>
          <Rodape/>
        </>
        )}
      </div>
    </div>
    
  )
}

export default Home