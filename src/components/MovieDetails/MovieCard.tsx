import React, { useState } from 'react'
import {
  ButonFav,
  CardContainer,
  CardImage,
  IconContainer
} from './MovieCard.style'
import { useMovieContext } from '../../context/MovieContext'
import MovieModal from '../MovieModal/MovieModal'
import { Movie, MovieCardProps } from '../../types'

const MovieCard = ({ movie }: MovieCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { addToWatchlist } = useMovieContext()

  const handleAddToWatchlist = (movie: Movie) => {
    addToWatchlist(movie)
  }

  return (
    <>
      <CardContainer onClick={() => setIsModalOpen(true)}>
        <IconContainer
          onClick={e => {
            e.stopPropagation()
            handleAddToWatchlist(movie)
          }}
        >
          <ButonFav />
        </IconContainer>
        <CardImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </CardContainer>
      {isModalOpen && (
        <MovieModal movie={movie} closeModal={() => setIsModalOpen(false)} />
      )}
    </>
  )
}

export default MovieCard
