import React from 'react'
import { render } from '@testing-library/react'
import Home from '../../pages/Home'

jest.mock('../Carousel/Carousel.tsx', () => {
  const MockedCarousel = () => <div data-testid='mock-carousel' />
  MockedCarousel.displayName = 'MockedCarousel'
  return MockedCarousel
})

jest.mock('../MovieList/MovieList.tsx', () => {
  const MockedMovieList = () => <div data-testid='mock-movies-list' />
  MockedMovieList.displayName = 'MockedMovieList'
  return MockedMovieList
})

describe('Home Component', () => {
  it('renders the Carousel and MoviesList components', () => {
    const { getByTestId } = render(<Home />)

    const carousel = getByTestId('mock-carousel')
    const moviesList = getByTestId('mock-movies-list')

    expect(carousel).toBeInTheDocument()
    expect(moviesList).toBeInTheDocument()
  })
})
