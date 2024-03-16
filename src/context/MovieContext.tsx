import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
  useCallback,
} from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Movie } from '../types'
import SuccessMsg from '../components/Toast/SuccessMsg'

const MovieContext = createContext<MovieContextType>({
  moviesData: undefined,
  isLoadingMovies: false,
  moviesError: null,
  searchQuery: '',
  setSearchQuery: () => {},
  addToWatchlist: (movie: Movie) => {},
  watchlist: [],
  removeFromWatchlist: (movie: Movie) => {},
})
// Here , we can add some sort of pagination using this API by changing parameter page with currentPage and receive different
// movies
const MOVIES_LIST_URL = 'https://api.themoviedb.org/3/discover/movie?page=1'
//    The API key used here is currently not valid (please refer to the ReadMe). Typically, I do not expose the key, but in 
// this instance, it was functioning correctly. However, it is essential to note that the key needs to be updated every 
// 60 minutes, and the only way to do so is by accessing my account.
// I had intended to implement authentication to secure this JWT better, but unfortunately, the API being used does 
// not support this feature.

 const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTgwNTA4NzI2MDIwYTA3ODdlNjRhYjEzNDFmZGRjZiIsInN1YiI6IjY1ZjBlYWI0MGU0ZmM4MDE4NmNhM2IzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WHmVe_rH15rgUZJP1A_Ih6536sbPI_iXDlEXOi1ZQ-g'

type MovieProviderProps = {
  children: ReactNode
}

type MovieContextType = {
  moviesData: Movie[] | undefined
  isLoadingMovies: boolean
  moviesError: Error | null
  searchQuery: string
  setSearchQuery: Dispatch<SetStateAction<string>>
  watchlist: Movie[]
  addToWatchlist: (movie: Movie) => void
  removeFromWatchlist: (movie: Movie) => void
}

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [watchlist, setWatchlist] = useState<Movie[]>([])
  const [successMsg, setSuccessMsg] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const {
    data: moviesData,
    isLoading: isLoadingMovies,
    error: moviesError,
  } = useQuery<Movie[], Error>('movies', async () => {
    const response = await axios.get<Movie[]>(MOVIES_LIST_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: 'application/json',
      },
    })
    return response.data
  })

  const addToWatchlist = useCallback(
    (movie: Movie) => {
      const movieExists = watchlist.some((item) => item.id === movie.id)

      if (!movieExists) {
        setWatchlist((prevWatchlist) => [...prevWatchlist, movie])
        setSuccessMsg({ success: true, message: 'Movie added successfully' })
      } else {
        setSuccessMsg({
          success: false,
          message: 'Movie already exists in watchlist',
        })
      }
    },
    [watchlist],
  )

  const removeFromWatchlist = useCallback(
    (movie: Movie) => {
      const updatedWatchlist = watchlist.filter((item) => item.id !== movie.id)
      setWatchlist(updatedWatchlist)
      setSuccessMsg({ success: true, message: 'Movie removed successfully' })
    },
    [watchlist],
  )

  const handleCloseMsg = () => {
    setSuccessMsg(null)
  }

  const contextValue = useMemo(
    () => ({
      moviesData,
      isLoadingMovies,
      moviesError,
      searchQuery,
      setSearchQuery,
      watchlist,
      addToWatchlist,
      removeFromWatchlist,
    }),
    [
      moviesData,
      isLoadingMovies,
      moviesError,
      searchQuery,
      watchlist,
      removeFromWatchlist,
      addToWatchlist,
    ],
  )

  return (
    <>
      <MovieContext.Provider value={contextValue}>
        {children}
      </MovieContext.Provider>
      {successMsg && (
        <SuccessMsg
          success={successMsg.success}
          message={successMsg.message}
          onClose={handleCloseMsg}
        />
      )}
    </>
  )
}
