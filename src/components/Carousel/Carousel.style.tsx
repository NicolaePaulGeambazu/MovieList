import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Slide = styled.div`
  padding: 0 10px;
`;

export const SlideImage = styled.img<{ isSelected: boolean }>`
  width: 100%;
  height: auto;
  ${({ isSelected }) => !isSelected && 'pointer-events: none;'}; // Disable click events on non-selected slides
`;