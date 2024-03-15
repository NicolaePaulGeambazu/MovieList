import {
  CloseButton,
  ContentContainer,
  Image,
  ModalBackdrop,
  ModalContent,
} from './MovieMolda.style'
import useDeviceType from '../../hooks/useDeviceType'
import { MovieModalProps } from '../../types'

const MovieModal = ({ movie, closeModal }: MovieModalProps) => {
  const { deviceType } = useDeviceType()
  return (
    <ModalBackdrop onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ContentContainer deviceType={deviceType}>
          <CloseButton onClick={closeModal} />
          <Image
            deviceType={deviceType}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
          </div>
        </ContentContainer>
      </ModalContent>
    </ModalBackdrop>
  )
}

export default MovieModal
