import { useMovieContext } from '../context/MovieContext'
import WatchListMovie from '../components/WatchListMovie/WatchListMovie'
import { Heading, WatchListContainer } from './Pages.style'
import useDeviceType from '../hooks/useDeviceType'

function WatchList() {
  const { watchlist } = useMovieContext()
  const { deviceType } = useDeviceType()
  return (
    <WatchListContainer deviceType={deviceType}>
      <Heading>Watch List:</Heading>
      {watchlist.map((movie, index) => (
        <WatchListMovie key={index} movie={movie} />
      ))}
    </WatchListContainer>
  )
}

export default WatchList;
