import React, { useState } from 'react'
import {
  HeaderContainer,
  HeaderText,
  Menu,
  MenuBox,
  MenuButton,
} from './Header.style'
import { useNavigate } from 'react-router-dom'
import useDeviceType from '../../hooks/useDeviceType'

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const navigateTo = useNavigate()
  const { deviceType } = useDeviceType()
  return (
    <HeaderContainer>
      <HeaderText>Movies List</HeaderText>
      <Menu onClick={() => setOpenMenu(!openMenu)} data-testid="menu-button">
        Menu
      </Menu>
      {openMenu && (
        <MenuBox>
          <MenuButton
            deviceType={deviceType}
            onClick={() => navigateTo('/')}
            data-testid="home-button"
          >
            Home
          </MenuButton>
          <MenuButton
            deviceType={deviceType}
            onClick={() => navigateTo('/watchlist')}
            data-testid="watchlist-button"
          >
            Watch List
          </MenuButton>
        </MenuBox>
      )}
    </HeaderContainer>
  )
}

export default Header
