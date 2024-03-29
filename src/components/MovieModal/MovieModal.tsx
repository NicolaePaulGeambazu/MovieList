import React from 'react'
import {
  CloseButton,
  ContentContainer,
  Image,
  ModalBackdrop,
  ModalContent
} from './MovieMolda.style'
import useDeviceType from '../../hooks/useDeviceType'
import { MovieModalProps } from '../../types'

const MovieModal = ({ movie, closeModal }: MovieModalProps) => {
  const { deviceType } = useDeviceType()

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  return (
    <ModalBackdrop onClick={closeModal}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ContentContainer devicetype={deviceType}>
          <CloseButton onClick={closeModal} />
          <Image
            devicetype={deviceType}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Release Date: {formatDate(movie.release_date)}</p>
          </div>
        </ContentContainer>
      </ModalContent>
    </ModalBackdrop>
  )
}

export default MovieModal
