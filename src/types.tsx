import { ReactNode } from 'react'
export type MovieDetailsProps = {
  id: string
}

export type Movie = {
  id: string
  title: string
  imdb_id: string
  poster_path?: string
  backdrop_path?: string
  overview: string
  release_date: string
}

export type MovieContextType = {
  moviesData: Movie[] | undefined
  isLoadingMovies: boolean
  moviesError: Error | null
}
export type LayoutProps = {
  children: ReactNode
}

export type MoviesContainerProps = {
  deviceType: string
}

export type FilterProps = {
  onSort: () => void
}

export type MovieCardProps = {
  movie: Movie
}

export type MovieModalProps = MovieCardProps & {
  closeModal: () => void
}

export type SuccessMsgProps = {
  success: boolean
  message: string
  onClose: () => void
}

export type DeviceType = 'desktop' | 'laptop' | 'tablet' | 'mobile'
