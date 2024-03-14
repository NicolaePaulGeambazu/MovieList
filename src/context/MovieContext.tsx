import React, { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction, useMemo, useCallback } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Movie } from '../types';
import SuccessMsg from '../components/Toast/SuccessMsg';

const MovieContext = createContext<MovieContextType>({
  moviesData: undefined,
  isLoadingMovies: false,
  moviesError: null,
  searchQuery: '',
  setSearchQuery: () => {},
  addToWatchlist: (movie: Movie) => {},
  watchlist: [],
  removeFromWatchlist: (movie: Movie) => {},
});

const MOVIES_LIST_URL = 'https://api.themoviedb.org/3/discover/movie?page=1';
const API_KEY = '8180508726020a0787e64ab1341fddcf';

interface MovieProviderProps {
  children: ReactNode;
}

interface MovieContextType {
  moviesData: Movie[] | undefined;
  isLoadingMovies: boolean;
  moviesError: Error | null;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (movie: Movie) => void;
}

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  const [successMsg, setSuccessMsg] = useState<{ success: boolean; message: string } | null>(null); // State to control SuccessMsg visibility

  const { data: moviesData, isLoading: isLoadingMovies, error: moviesError } = useQuery<Movie[], Error>('movies', async () => {
    const response = await axios.get<Movie[]>(MOVIES_LIST_URL, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Accept': 'application/json'
      }
    });
    return response.data;
  });

  const addToWatchlist = useCallback((movie: Movie) => {
    const movieExists = watchlist.some(item => item.id === movie.id);

    if (!movieExists) {
      setWatchlist(prevWatchlist => [...prevWatchlist, movie]);
      setSuccessMsg({ success: true, message: 'Movie added successfully' });
    } else {
      setSuccessMsg({ success: false, message: 'Movie already exists in watchlist' });
    }
  }, [watchlist]);

  const removeFromWatchlist = useCallback((movie: Movie) => {
    const updatedWatchlist = watchlist.filter(item => item.id !== movie.id);
    setWatchlist(updatedWatchlist);
    setSuccessMsg({ success: true, message: 'Movie removed successfully' });
  }, [watchlist]);

  const handleCloseMsg = () => {
    setSuccessMsg(null); // Close the SuccessMsg
  };

  const contextValue = useMemo(() => ({
    moviesData,
    isLoadingMovies,
    moviesError,
    searchQuery,
    setSearchQuery,
    watchlist,
    addToWatchlist,
    removeFromWatchlist
  }), [moviesData, isLoadingMovies, moviesError, searchQuery, watchlist, removeFromWatchlist, addToWatchlist]);

  return (
    <>
      <MovieContext.Provider value={contextValue}>
        {children}
      </MovieContext.Provider>
      {successMsg && <SuccessMsg success={successMsg.success} message={successMsg.message} onClose={handleCloseMsg} />}
    </>
  );
};
