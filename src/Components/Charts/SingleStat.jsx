import React from 'react';
import styled from 'styled-components';

import Energy from '../../assets/img/energy.svg';
import Protein from '../../assets/img/chicken.svg';
import Glucid from '../../assets/img/apple.svg';
import Lipid from '../../assets/img/cheeseburger.svg';

const SingleStat = ({type, value}) => {

    const keyData = () => {
		switch (type) {
			case 'calorieCount':
				return { label: 'Calories', img: Energy, bg: 'rgba(253, 81, 129, 0.1)' };
			case 'proteinCount':
				return { label: 'Protéines', img: Protein, bg: 'rgba(74, 184, 255, 0.1)' };
			case 'carbohydrateCount':
				return { label: 'Glucides', img: Glucid, bg: 'rgba(249, 206, 35, 0.1)' };
			case 'lipidCount':
				return { label: 'Lipides', img: Lipid, bg: 'rgba(253, 81, 129, 0.1)' };
			default:
				break;
		}
	};

	value = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(value)

    return (
        <Statistic>
			<Icon color={keyData().bg}>
				<img src={keyData().img} alt={`${keyData().label} icon`} />
			</Icon>
			<div>
				<Value>{value + (type === 'calorieCount' ? 'kCal' : 'g')}</Value>
				<Type>{keyData().label}</Type>
			</div>
		</Statistic>
    );
};

const Statistic = styled.div`
	background: #fbfbfb;
	height: 124px;
	border-radius: 5px;
	display: flex;
	align-items: center;
`;

const Value = styled.span`
	background: #fbfbfb;
	font-weight: 700;
	font-size: 20px;
`;

const Type = styled.p`
	color: #74798c;
	font-size: 14px;
`;

const Icon = styled.div`
	height: 60px;
	width: 60px;
	border-radius: 6px;
	margin-right: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${(props) => props.color};
	margin-left: 32px;
	margin-right: 24px;

	img {
		width: 1.5vw;
	}
`;

export default SingleStat;