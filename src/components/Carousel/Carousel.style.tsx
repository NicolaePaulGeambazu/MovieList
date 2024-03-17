import styled from 'styled-components'

export const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const Slide = styled.div`
  padding: 0 10px;
`

export const SlideImage = styled.img<{ $isselected: boolean}>`
  width: 100%;
  height: auto;
  ${({ $isselected }) => $isselected ? 'pointer-events: auto;' : 'pointer-events: none;'};
`
