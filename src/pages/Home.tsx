import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import { Container } from '../GlobalStyle.style'
import MoviesList from '../components/MovieList/MovieList'

function Home() {
  return (
    <>
      <Carousel />
      <Container>
         <MoviesList />
      </Container>
    </>
  )
}

export default Home