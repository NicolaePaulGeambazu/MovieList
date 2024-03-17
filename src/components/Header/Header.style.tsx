import { RxHamburgerMenu } from 'react-icons/rx'
import styled from 'styled-components'
import { MoviesContainerProps } from '../../types'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  background: #3242a8;
  height: 50px;
`

export const Menu = styled(RxHamburgerMenu)`
  cursor: pointer;
  color: #fff;
  font-size: 24px;
`

export const HeaderText = styled.span`
  font-size: 1.2rem;
  margin-right: auto;
  color: #fff;
`

export const MenuBox = styled.div`
  width: 100%;
  margin: auto;
  height: 150px;
  background-color: #3242a8;
  position: absolute;
  top: 90px;
  left: 0;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

export const MenuButton = styled.button<MoviesContainerProps>`
  display: flex;
  width: ${props => (props.devicetype === 'mobile' ? '50%' : '20%')};
  color: #fff;
  margin: auto;
  justify-content: center;
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-align: left;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
`
