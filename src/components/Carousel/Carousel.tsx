import React, { useState } from 'react'
import Slider from 'react-slick'
import { useMovieContext } from '../../context/MovieContext'
import { Movie } from '../../types'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CarouselContainer, Slide, SlideImage } from './Carousel.style'

const Carousel = () => {
  const { moviesData } = useMovieContext()
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  if (
    !moviesData ||
    !('results' in moviesData) ||
    !Array.isArray(moviesData.results) ||
    moviesData.results.length === 0
  ) {
    return <div>No movies found</div>
  }

  const first5Movies: Movie[] = moviesData.results.slice(0, 5)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index)
  }
  return (
    <CarouselContainer>

      <Slider {...settings}>
        {first5Movies.map((movie: Movie, index: number) => (
          <Slide key={movie.id}>
            <SlideImage
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              $isselected={index === currentSlide}
            />
          </Slide>
        ))}
      </Slider>
    </CarouselContainer>
  )
}

export default Carousel
