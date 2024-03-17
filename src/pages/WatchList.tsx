import React from 'react'
import { useMovieContext } from '../context/MovieContext'
import WatchListMovie from '../components/WatchListMovie/WatchListMovie'
import { EmptyWatchListMessage, Heading, WatchListContainer } from './Pages.style'

const WatchList = () => {
  const { watchlist } = useMovieContext()

  return (
    <WatchListContainer>
      <Heading>Watch List:</Heading>
      {watchlist.length === 0 ? (
        <EmptyWatchListMessage>No movies added to watch list</EmptyWatchListMessage>
      ) : (
        watchlist.map((movie, index) => (
          <WatchListMovie key={index} movie={movie} />
        ))
      )}
    </WatchListContainer>
  )
}

export default WatchList
