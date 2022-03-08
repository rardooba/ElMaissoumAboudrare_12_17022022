import React from "react";
import styled from "styled-components";

import NavIcon from "./NavIcon";

import Meditation from "../../../assets/img/meditation.svg";
import Swim from "../../../assets/img/swim.svg";
import Bike from "../../../assets/img/bike.svg";
import Gym from "../../../assets/img/dumbbell.svg";

const SideBarRight = () => {

  const dynamicDateCopyright = () => {
    return new Date().toLocaleDateString("fr-FR", {
      year: "numeric",
    });
  };

  return (
    <AsideLeft>
      <ul>
        <NavIcon path="/user" title="User Link" alt="Méditation" src={Meditation} />
        <NavIcon path="/user" title="User Link" alt="Natation" src={Swim} />
        <NavIcon path="/user" title="User Link" alt="Vélo" src={Bike} />
        <NavIcon path="/user" title="User Link" alt="Musculation" src={Gym} />
      </ul>
      <span>© Copyright, SportSee {dynamicDateCopyright()}</span>
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

  ul {
    height: 50%;
    max-height: 500px;
    display: flex;
    flex-direction: column;
  }

  span {
    color: white;
    font-size: 12px;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    transform: rotate(180deg);
  }
`;


export default SideBarRight;
