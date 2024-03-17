import styled from 'styled-components'
import { MoviesContainerProps } from '../../types'

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 30px;
`

export const UtilityContainerBox = styled.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`

export const Container = styled.div`
  padding: 20px;
  width: 80%;
  margin: auto;
`

export const Header = styled.div<MoviesContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  ${props =>
    (props.deviceType === 'mobile' || props.deviceType === 'tablet') &&
    `
    margin-top: 20px;
    margin-bottom: 0;
    justify-content: center;
  `}
`

export const MoviesContainer = styled.div<MoviesContainerProps>`
  display: grid;
  grid-template-columns: ${
    ({ deviceType }) =>
      deviceType === 'desktop'
        ? 'repeat(3, 1fr)' // for desktop
        : deviceType === 'laptop'
          ? 'repeat(2, 1fr)' // for laptop
          : deviceType === 'tablet'
            ? 'repeat(2, 1fr)' // for tablet
            : 'repeat(1, 1fr)' // for mobile
  };
  gap: 20px;
`

export const NoMoviesMessage = styled.div`
  text-align: center;
  font-size: 18px;
  color: #555;
`
