import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

export const SearchContainer = styled.span`
  display: flex;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
`;

export const SearchButton = styled(IoSearchOutline)`
`;

export const SearchField = styled.input`
border: none;
outline: none;
`;