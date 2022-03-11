import React from 'react';
import styled from 'styled-components';

import propTypes from 'prop-types';

//* RECHARTS LIB
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

/**
 * This componnent will render the Preformance graph
 * @param {Object} performances User's performances metrics
 * @param {Object} performances.kind Type of performances
 * @param {...String} performances.kind.index index of type of performances
 * @param {Array} performances.data User Performance Metrics data
 * @param {Number} performances.data[].value Performance Metrics data > value
 * @param {Number} performances.data[].kind Performance Metrics data > kind
 * @returns {JSX}
 */
const UserPerformance = ({dataPerformance}) => {

	/**
	 * Translate labels in french
	 * @param {Number} id 
	 * @returns {String} All labels in french
	 */
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

/*----------------*\
        CSS
\*----------------*/

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