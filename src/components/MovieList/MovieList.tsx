import { useState, useEffect } from 'react'
import { useMovieContext } from '../../context/MovieContext'
import { Movie } from '../../types'
import MovieCard from '../MovieDetails/MovieCard'
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import {
  Container,
  Header,
  MoviesContainer,
  NoMoviesMessage,
  UtilityContainerBox,
} from './MovieList.style'
import useDeviceType from '../../hooks/useDeviceType'

const MoviesList = () => {
  const { moviesData, isLoadingMovies, moviesError, searchQuery } =
    useMovieContext()
  const [movies, setMovies] = useState<Movie[]>([])
  const { deviceType } = useDeviceType()

  useEffect(() => {
    if (
      moviesData &&
      'results' in moviesData &&
      Array.isArray(moviesData.results)
    ) {
      const allMovies: Movie[] = moviesData.results
      let filteredMovies = allMovies

      if (searchQuery) {
        filteredMovies = allMovies.filter((movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      }

      setMovies(filteredMovies)
    }
  }, [moviesData, searchQuery])

  const sortAlphabetically = () => {
    const sortedMovies = [...movies].sort((a, b) =>
      a.title.localeCompare(b.title),
    )
    setMovies(sortedMovies)
  }

  return (
    <Container>
      <Header deviceType={deviceType}>
        <UtilityContainerBox>
          <Search />
          <Filter onSort={sortAlphabetically} />
        </UtilityContainerBox>
      </Header>
      {isLoadingMovies && <div>Loading...</div>}
      {moviesError && <div>Error: {moviesError.message}</div>}
      {movies.length === 0 && (
        <NoMoviesMessage>No movies found</NoMoviesMessage>
      )}
      {movies.length > 0 && (
        <MoviesContainer deviceType={deviceType}>
          {movies.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </MoviesContainer>
      )}
    </Container>
  )
}

export default MoviesList
