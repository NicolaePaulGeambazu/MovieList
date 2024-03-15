import { useMovieContext } from '../../context/MovieContext'
import {
  BinButton,
  ImageWatchList,
  MovieTitle,
  WatchItemContainer,
} from './WatchListMovie.style'
import useDeviceType from '../../hooks/useDeviceType'
import { Movie } from '../../types'

function WatchListMovie({ movie }: { movie: Movie }) {
  const { removeFromWatchlist } = useMovieContext()
  const { deviceType } = useDeviceType()

  const handleRemoveFromWatchlist = () => {
    removeFromWatchlist(movie)
  }

  return (
    <WatchItemContainer deviceType={deviceType}>
      <ImageWatchList
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieTitle>{movie.title}</MovieTitle>
      <BinButton onClick={handleRemoveFromWatchlist} />
    </WatchItemContainer>
  )
}

export default WatchListMovie
