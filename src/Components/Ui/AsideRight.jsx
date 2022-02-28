import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Meditation from "../../assets/img/meditation.svg";
import Swim from "../../assets/img/swim.svg";
import Bike from "../../assets/img/bike.svg";
import Gym from "../../assets/img/dumbbell.svg";

const SideBarRight = () => {

  const dynamicDateCopyright = () => {
    return new Date().toLocaleDateString("fr-FR", {
      year: "numeric",
    });
  };

  return (
    <AsideLeft>
      <ul>
        <LiICON>
          <Link to="/">
            <img src={Meditation} alt="Méditation" />
          </Link>
        </LiICON>
        <LiICON>
          <Link to="/">
            <img src={Swim} alt="Natation" />
          </Link>
        </LiICON>
        <LiICON>
          <Link to="/">
            <img src={Bike} alt="Vélo" />
          </Link>
        </LiICON>
        <LiICON>
          <Link to="/">
            <img src={Gym} alt="Musculation" />
          </Link>
        </LiICON>
      </ul>
      <p>© Copyright, SportSee {dynamicDateCopyright()}</p>
    </AsideLeft>
  );
};

const AsideLeft = styled.aside`
  background: black;
  min-width: 117px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  p {
    color: white;
    font-size: 12px;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    transform: rotate(180deg);
  }

  ul {
    height: 50%;
    max-height: 500px;
    display: flex;
    flex-direction: column;
  }
`;

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

export default SideBarRight;
