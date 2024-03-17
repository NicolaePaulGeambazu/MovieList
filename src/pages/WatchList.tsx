import React from 'react'
import { useMovieContext } from '../context/MovieContext'
import WatchListMovie from '../components/WatchListMovie/WatchListMovie'
import { Heading, WatchListContainer } from './Pages.style'

function WatchList () {
  const { watchlist } = useMovieContext()
  return (
    <WatchListContainer>
      <Heading>Watch List:</Heading>
      {watchlist.map((movie, index) => (
        <WatchListMovie key={index} movie={movie} />
      ))}
    </WatchListContainer>
  )
}

export default WatchList
