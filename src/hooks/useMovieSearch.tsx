// useMovieSearch.js

import { useState, useEffect } from 'react';
import { useMovieContext } from '../context/MovieContext';
import { Movie } from '../types';

const useMovieSearch = (query: string) => {
  const { moviesData, isLoadingMovies, moviesError } = useMovieContext();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (isLoadingMovies || moviesError || !moviesData || !('results' in moviesData) || !Array.isArray(moviesData.results)) {
      setFilteredMovies([]);
      return;
    }

    const movies: Movie[] = moviesData.results;
    const filtered = movies.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredMovies(filtered);
  }, [query, isLoadingMovies, moviesError, moviesData]);

  return { filteredMovies, isLoadingMovies, moviesError };
};

export default useMovieSearch;
