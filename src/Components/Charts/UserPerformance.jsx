import React from 'react';
import styled from 'styled-components';

import propTypes from 'prop-types';

import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

/**
 * This componnent will render the Preformance graph
 * @param {Object} params
 * @param {Object} params.kind
 * @param {Array} params.data
 * @returns {JSX}
 */
const UserPerformance = ({dataPerformance}) => {


	const englishTOfrench = id => {
		const LabelFR = {
			cardio: 'Cardio',
			energy: 'Energie',
			endurance: 'Endurance',
			strength: 'Force',
			speed: 'Vitesse',
			intensity: 'Intensité',
		};

		return LabelFR[dataPerformance.kind[id]];
	}


    return (
        <Figure>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="70%" startAngle={210} endAngle={570} data={dataPerformance.data}>
					<PolarGrid radialLines={false} />
					<PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
					<PolarAngleAxis dataKey="kind" tickFormatter={englishTOfrench} tick={{ fill: '#FFFFFF', fontSize: '12px' }} />
					<Radar legendType="none" dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.7} />
					<Legend />
				</RadarChart>
			</ResponsiveContainer>
		</Figure>
    );
};

const Figure = styled.figure`
	background: #282d30;
	border-radius: 5px;
	height: 236px;
	width: 258px;
	margin: 0 auto;
`;

UserPerformance.propTypes = {
	dataPerformance: propTypes.object,
};

export default UserPerformance;