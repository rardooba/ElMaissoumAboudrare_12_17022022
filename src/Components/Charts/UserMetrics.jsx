import React from "react";
import styled from "styled-components";

import propTypes from 'prop-types';

import SingleStat from "./SingleStat";

/**
 * This component will create all the stats components on the sidebar right
 * @param {Object} params
 * @returns {JSX}
 */
const UserMetrics = ({ dataMetrics }) => {

  const objTOarray = (obj) => Object.entries(obj);

  //console.log(objTOarray(dataMetrics));

  return (
    <SideBar>
      {objTOarray(dataMetrics).map((elt, index) => (
        <SingleStat key={index} type={elt[0]} value={elt[1]} />
      ))}
    </SideBar>
  );
};

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
