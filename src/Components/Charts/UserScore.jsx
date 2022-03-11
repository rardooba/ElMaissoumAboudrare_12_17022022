import React from "react";
import styled from "styled-components";

import propTypes from 'prop-types';

//* RECHARTS LIB
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";

/**
 * Display the user score graph
 * @param {Object} users User's infos
 * @param {Number} users.todayScore User's day score
 * @returns {JSX}
 */
const UserScore = ({dataScore}) => {
  return (
    <Figure>
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            cx={"50%"}
            cy={"50%"}
            startAngle={90}
            endAngle={450}
            innerRadius={"85%"}
            outerRadius={"100%"}
            cornerRadius={"50%"}
            nameKey="name"
            dataKey="value"
            data={
              [
                {name: 'score', value: dataScore},
                {name: 'total', value: 1 - dataScore}
              ]
            }
          >
            <Cell fill="#E60000" stroke="#E60000" />
            <Cell fill="transparent" stroke="transparent" />
          </Pie>
          <Pie
            cx={"50%"}
            cy={"50%"}
            outerRadius={"85%"}
            fill="#FFFFFF"
            data={[{ name: "ring", value: 100 }]}
            dataKey="value"
          />
          <Legend
            verticalAlign="middle"
            align="center"
            content={CustomLegend}
          />
        </PieChart>
      </ResponsiveContainer>
    </Figure>
  );
};

/**
 * Show custom label on the graph
 * @param {Object} params Custom Legend
 * @param {Boolean} params.active isActive (true or false)
 * @param {Array} params.payload The source data of the content to be displayed in the legend, usually calculated internally.
 * @returns {JSX | null}
 */
const CustomLegend = ({ payload }) => (
  <LegendCustom>
    <h2>{payload[0].payload.value * 100}%</h2>
    <Desc>de votre</Desc>
    <Desc>objectif</Desc>
  </LegendCustom>
);

/*----------------*\
        CSS
\*----------------*/

const Figure = styled.figure`
  background: #fbfbfb;
  border-radius: 5px;
  height: 236px;
  width: 258px;
  margin: 0 auto;
  position: relative;
  padding: 25px;

  h2 {
    font-size: 15px;
    font-weight: 500;
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .recharts-legend-wrapper {
    position: absolute;
    width: 198px;
    height: auto;
    left: 5px;
    top: 61.5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LegendCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;


  h2 {
    font-size: 24px;
    font-weight: 700;
    position: relative;
    top: 0px;
    left: 0px;
  }
`;

const Desc = styled.div`
  color: rgb(116, 121, 140);
  font-size: 14px;
`;

UserScore.propTypes = {
	dataScore: propTypes.number,
};

CustomLegend.propTypes = {
	payload: propTypes.array,
};


export default UserScore;
