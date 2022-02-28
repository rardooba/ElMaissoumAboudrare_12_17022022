import React from "react";
import styled from "styled-components";
import LogoSVG from "../../assets/img/logo.svg"

const Header = () => {
  return (
    <HeaderTop>
      <Logo src={LogoSVG} alt="Logo de SportSee" />
      <NavTop>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </NavTop>
    </HeaderTop>
  );
};

const HeaderTop = styled.header`
  background: black;
  width: 100vw;
  height: 91px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

const NavTop = styled.nav`
  color: white;
  font-size: 24px;
  font-weight: 500;
  width: 100%;
  max-width: 1240px;
  
  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    li {
        cursor: pointer;
    }
  }
`;

const Logo = styled.img`
  margin: 0 15px;
`;

export default Header;
