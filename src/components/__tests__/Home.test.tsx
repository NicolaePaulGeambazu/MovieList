import { render } from '@testing-library/react';
import Home from '../../pages/Home';

jest.mock('../Carousel/Carousel.tsx', () => () => <div data-testid="mock-carousel"></div>);
jest.mock('../MovieList/MovieList.tsx', () => () => <div data-testid="mock-movies-list"></div>);
const mockedMovies = [
    {
      id: '1',
      title: 'Movie 1',
      imdb_id: 'tt1234567',
      poster_path: '/poster1.jpg',
      backdrop_path: '/backdrop1.jpg',
      overview: 'Overview of Movie 1',
      release_date: '2022-01-01',
    },
    {
      id: '2',
      title: 'Movie 2',
      imdb_id: 'tt2345678',
      poster_path: '/poster2.jpg',
      backdrop_path: '/backdrop2.jpg',
      overview: 'Overview of Movie 2',
      release_date: '2022-01-02',
    },
  ];
describe('Home Component', () => {
  it('renders the Carousel and MoviesList components', () => {
    const { getByTestId } = render(<Home />);
    
    const carousel = getByTestId('mock-carousel');
    const moviesList = getByTestId('mock-movies-list');

    expect(carousel).toBeInTheDocument();
    expect(moviesList).toBeInTheDocument();
  });
  it('renders the Carousel component with correct props', () => {
    // Mock props for Carousel
    const carouselProps = { mockedMovies};
  
    // Render the Home component
    const { getByTestId } = render(<Home />);
  
    // Find the Carousel component by data-testid
    const carousel = getByTestId('mock-carousel');
  });
});
