import React, { useState } from 'react';
import { useMovieContext } from '../../context/MovieContext';
import { SearchButton, SearchField, SearchContainer } from './Search.style';

const Search: React.FC = () => {
  const { setSearchQuery } = useMovieContext();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    setSearchQuery(query);
  };

  return (
    <SearchContainer>
      <SearchField type="text"  onChange={(e) => setQuery(e.target.value)} />
      <SearchButton onClick={handleSearch}/>
    </SearchContainer>
  );
};

export default Search;
