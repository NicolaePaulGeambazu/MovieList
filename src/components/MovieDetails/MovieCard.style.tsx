import styled from 'styled-components';
import { IoStarOutline } from 'react-icons/io5';

export const CardContainer = styled.div`
  width: 300px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: auto;
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ButonFav = styled(IoStarOutline)`
  font-size: 24px;
  color: #c4c4c4;
  transition: transform 0.2s ease;
  margin-top: 10px;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  z-index: 1;
  background: #f0f33c;
  height: 45px;
  transition: transform 0.2s ease;

  ${CardContainer}:hover & {
    transform: translate(0, -30%);
  }
`;

