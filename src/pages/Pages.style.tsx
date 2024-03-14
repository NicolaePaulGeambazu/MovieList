import styled from "styled-components";
import { MoviesContainerProps } from "../types";

export const WatchListContainer = styled.div<MoviesContainerProps>`
    width: 80%;
    display: grid;
    margin: 20px auto;
    grid-template-columns: ${(props) => (
      props.deviceType === 'mobile' || props.deviceType === 'tablet'
        ? '1fr'
        : 'repeat(3, 1fr)'
    )};;
`;

export const Heading = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;