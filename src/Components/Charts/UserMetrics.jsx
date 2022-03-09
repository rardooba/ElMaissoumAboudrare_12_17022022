import React from "react";
import styled from "styled-components";

import propTypes from 'prop-types';

import SingleStat from "./SingleStat";

/**
 * Display the stats components on the right sidebar 
 * @param {Array.<Object.<Number>>} users[].keyData{}
 * @returns {JSX}
 */
const UserMetrics = ({ dataMetrics }) => {

  //Format Object to Array > [['calorieCount', 1930], Array(2), Array(2), Array(2)]
  const objTOarray = (obj) => Object.entries(obj);

  return (
    <SideBar>
      {objTOarray(dataMetrics).map((elt, index) => (
        <SingleStat key={index} type={elt[0]} value={elt[1]} />
      ))}
    </SideBar>
  );
};

/*----------------*\
        CSS
\*----------------*/

const SideBar = styled.ul`
  min-width: 258px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

UserMetrics.propTypes = {
	dataMetrics: propTypes.object,
};

export default UserMetrics;
