import React from 'react';
import { Link } from "react-router-dom";

import styled from "styled-components";

import propTypes from 'prop-types';

const NavIcon = ({path, title, alt, src}) => {
    return (
        <LiICON>
          <Link to={path} title={title}>
            <img src={src} alt={alt} />
          </Link>
        </LiICON>
    );
};

const LiICON = styled.li`
  height: 64px;
  width: 64px;
  background: white;
  border-radius: 6px;
  margin-bottom: 20px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

NavIcon.propTypes = {
  path: propTypes.string,
  title: propTypes.string,
  alt: propTypes.string,
  src: propTypes.string,
}

export default NavIcon;