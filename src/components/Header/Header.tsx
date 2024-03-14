

import React, { useState } from 'react';
import { HeaderContainer, HeaderText, Menu, MenuBox, MenuButton } from './Header.style';
import { useNavigate } from 'react-router-dom';
import useDeviceType from '../../hooks/useDeviceType';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigateTo = useNavigate();
  const { deviceType } = useDeviceType();
  return (
    <HeaderContainer>
      <HeaderText>Movies List</HeaderText>
      <Menu onClick={() => setOpenMenu(!openMenu)}>Menu</Menu>
      {openMenu && (
        <MenuBox>
          <MenuButton deviceType={deviceType} onClick={() => navigateTo('/')}>Home</MenuButton>
          <MenuButton deviceType={deviceType} onClick={() => navigateTo('/watchlist')}>Watch List</MenuButton>
        </MenuBox>
      )}
    </HeaderContainer>
  );
};

export default Header;
