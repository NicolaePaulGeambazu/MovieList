import { ReactNode } from 'react';
export interface MovieDetailsProps {
    id: string;
  }

export interface Movie {
    id: string;
    title: string;
    imdb_id: string;
    poster_path?: string;
    backdrop_path?: string;
}

  
export  interface MovieContextType {
    moviesData: Movie[] | undefined;
    isLoadingMovies: boolean;
    moviesError: Error | null;
  }
export interface LayoutProps {
  children: ReactNode;
}

export type MoviesContainerProps = {
  deviceType: string;
};
  
 