import React from "react";
import styled from "styled-components";

import propTypes from 'prop-types';

import SingleStat from "./SingleStat";

/**
 * Display the stats components on the right sidebar 
 * @param {Object} users User's infos
 * @param {Object} users.keyData User's body metrics
 * @param {Number} users.keyData.calorieCount Consumed amount of Calories
 * @param {Number} users.keyData.proteinCount Consumed amount of Protein
 * @param {Number} users.keyData.carbohydrateCount Consumed amount of Carbohydrate
 * @param {Number} users.keyData.lipidCount Consumed amount of Lipid
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
	dataMetrics: propTypes.objectOf(propTypes.number),
};

export default UserMetrics;
