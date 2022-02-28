import React from "react";
import styled from "styled-components";

const NotFound404 = () => {
  return (
    <ERRORContent>
      <div class="glitch-bloc">
        <p class="invisible-text">404</p>
        <p class="glitchedAnim">404</p>
        <p class="glitchedAnim">404</p>
        <p class="glitchedAnim">404</p>
      </div>
      <p>😱 Toutes nos excuses ! cette page nexiste pas ou plus...</p>
    </ERRORContent>
  );
};

const ERRORContent = styled.section`
  width: 100%;
  height: 100vh;
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #000;

  .glitch-bloc {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .glitchedAnim,
  .invisible-text {
    font-family: Unica One, sans-serif;
    font-size: 250px;
    font-weight: 400;
    line-height: 1.1;
    color: #fff;
  }
  .glitchedAnim {
    position: absolute;
    top: 0;
    opacity: 0.9;
  }
  .invisible-text {
    visibility: hidden;
  }
  .glitchedAnim:nth-child(2) {
    color: #f03e3e;
    animation: skewAnim 3s infinite;
  }
  .glitchedAnim:nth-child(3) {
    color: #3df0cf;
    animation: glitchAnim2 3s infinite;
  }
  .glitchedAnim:nth-child(4) {
    color: #f1f1f1;
    animation: glitchAnim1 3s infinite;
  }

  @keyframes glitchAnim1 {
    7% {
      transform: none;
    }
    10% {
      transform: translate(6px, -2px);
    }
    13% {
      transform: none;
    }
    20% {
      transform: none;
    }
    23% {
      transform: translate(-12px, -7px);
    }
    26% {
      transform: none;
    }
    40% {
      transform: none;
    }
    43% {
      transform: translate(10px, -9px);
    }
    46% {
      transform: none;
    }
    65% {
      transform: none;
    }
    68% {
      transform: translate(7px, 5px);
    }
    71% {
      transform: none;
    }
    100% {
      transform: none;
    }
  }

  @keyframes glitchAnim2 {
    7% {
      transform: none;
    }
    10% {
      transform: translate(-6px, 2px);
    }
    13% {
      transform: none;
    }
    20% {
      transform: none;
    }
    23% {
      transform: translate(12px, 7px);
    }
    26% {
      transform: none;
    }
    40% {
      transform: none;
    }
    43% {
      transform: translate(-10px, 9px);
    }
    46% {
      transform: none;
    }
    65% {
      transform: none;
    }
    68% {
      transform: translate(-7px, 5px);
    }
    71% {
      transform: none;
    }
    100% {
      transform: none;
    }
  }

  @keyframes skewAnim {
    20% {
      transform: none;
    }
    23% {
      transform: skew(5deg, -5deg) translate(10px, 5px);
    }
    26% {
      transform: none;
    }
    40% {
      transform: none;
    }
    43% {
      transform: skew(5deg, -10deg) translate(-5px, 2px);
    }
    46% {
      transform: none;
    }
    100% {
      transform: none;
    }
  }
`;

export default NotFound404;
