import React, { useState } from 'react'
import { useMovieContext } from '../../context/MovieContext'
import { SearchButton, SearchField, SearchContainer } from './Search.style'

const Search = () => {
  const { setSearchQuery } = useMovieContext()
  const [query, setQuery] = useState<string>('')

  const handleSearch = () => {
    setSearchQuery(query)
  }

  return (
    <SearchContainer>
      <SearchField type='text' onChange={e => setQuery(e.target.value)} />
      <SearchButton onClick={handleSearch} />
    </SearchContainer>
  )
}

export default Search
