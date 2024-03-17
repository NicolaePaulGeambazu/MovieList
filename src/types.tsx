import { ReactNode } from 'react'
export interface MovieDetailsProps {
  id: string
}

export interface Movie {
  id: string
  title: string
  imdb_id: string
  poster_path?: string
  backdrop_path?: string
  overview: string
  release_date: string
}

export interface MovieContextType {
  moviesData: Movie[] | undefined
  isLoadingMovies: boolean
  moviesError: Error | null
}
export interface LayoutProps {
  children: ReactNode
}

export interface MoviesContainerProps {
  deviceType: string
}

export interface FilterProps {
  onSort: () => void
}

export interface MovieCardProps {
  movie: Movie
}

export type MovieModalProps = MovieCardProps & {
  closeModal: () => void
}

export interface SuccessMsgProps {
  success: boolean
  message: string
  onClose: () => void
}

export type DeviceType = 'desktop' | 'laptop' | 'tablet' | 'mobile'
