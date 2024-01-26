import React, { useState } from 'react';
import { StyledBusca, StyledContainerNav } from '../style';
import { useNavigate } from 'react-router-dom';

const SearchFilm = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && search.trim() !== '') {
      // Utilize o useNavigate para navegar para a página de resultados de pesquisa
      navigate(`/search/${search}`);
    }
  };

  return (
    <StyledContainerNav>
      <StyledBusca
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyPress}
        value={search}
        type="text"
        name=""
        id=""
        placeholder="Search Movie..."
      />
    </StyledContainerNav>
  );
};

export default SearchFilm;
