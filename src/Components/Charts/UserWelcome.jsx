import React from "react";
import styled from "styled-components";

import propTypes from 'prop-types';

/** 
 * @param {Object} users User's infos
 * @param {Object} users.userInfos User's identity 
 * @param {String} users.userInfos.firstName User's Firstname
 * @returns {JSX}
 */
const UserWelcome = ({dataName}) => {
  return (
    <Header>
      <h1>
        Bonjour <span>{dataName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </Header>
  );
};

/*----------------*\
        CSS
\*----------------*/

const Header = styled.header`
  h1 {
    font-size: 48px;
    font-weight: 500;

    span {
      color: red;
    }
  }

  p {
    margin-top: 40px;
    font-size: 18px;
  }
`;

UserWelcome.propTypes = {
  dataName: propTypes.string,
}
export default UserWelcome;
