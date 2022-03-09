import React from "react";
import styled from "styled-components";

import propTypes from 'prop-types';

//* RECHARTS LIB
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/**
 * Display the session average duration graph
 * @param {Object[]} sessionsList
 * @param {Object[]} sessionsList[].sessions[]
 * @param {Number} sessionsList[].day
 * @param {Number} sessionsList[].sessionLength
 * @returns {JSX}
 */
const UserAverageSessions = ({ dataSessions }) => {
  // Format day of the week
  const daysWeek = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };

  /**
   * @param {Object} params
   * @param {Number} params.item index
   * @returns {String} Day ex: "L"
   */
  const formatDay = (item) => daysWeek[item];

  return (
    <Figure>
      <HEADER>
        <h2>Durée moyenne des sessions</h2>
      </HEADER>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={250}
          height={186}
          data={dataSessions}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickFormatter={formatDay}
            tick={{ fontSize: 14, fill: "rgba(255, 255, 255, 0.5)" }}
            tickLine={false}
            tickMargin={10}
            tickSize={0}
            padding={{ left: 5, right: 5 }}
            fontSize={12}
          />
          <YAxis
            hide
            domain={[
              (dataMin) => 0 - Math.abs(dataMin),
              (dataMax) => dataMax * 2,
            ]}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.2)",
              strokeWidth: 50,
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "rgba(255, 255, 255, 0.2)",
              strokeWidth: 10,
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Figure>
  );
};

/**
 * Show custom label on the graph
 * @param {Object} params
 * @param {Boolean} params.active
 * @param {Array} params.payload
 * @return {JSX || null}
 */
const CustomTooltip = ({ active, payload }) =>
  active ? (
    <ToolTipLabel>
      <div>{payload[0].value} min</div>
    </ToolTipLabel>
  ) : null;

/*----------------*\
        CSS
\*----------------*/

const Figure = styled.figure`
  width: 258px;
  height: 236px;
  border-radius: 5px;
  background: #ff0000;
  position: relative;
`;

const HEADER = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  h2 {
    font-size: 15px;
    font-weight: 500;
    margin: 29px 60px 0 29px;
    line-height: 24px;
    color: #fff;
    opacity: 0.5;
  }
`;

const ToolTipLabel = styled.div`
  padding: 10px 5px;
  background: #f1f1f1;
  font-size: 15px;
`;

UserAverageSessions.propTypes = {
	dataSessions: propTypes.array.isRequired,
};

CustomTooltip.propTypes = {
	active: propTypes.bool,
	payload: propTypes.array,
};

export default UserAverageSessions;
