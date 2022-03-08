import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import Profile from "../../assets/img/profile.svg";

const Home = () => {
  return (
    <Main>
      <Header>
        <h1>
          Bienvenue sur <span>SportSee</span>
        </h1>
        <p>
          Cliquez sur l'id d'un utilisateur pour voir ses données sportives : 📊
        </p>
      </Header>

      <UserContainer>
        <Link to="/user/12">
          <User>
            <Icon>
              <img src={Profile} alt="Profile Icon" />
            </Icon>
            <div>
              <Name>
                Karl <br /> id: 12
              </Name>
            </div>
          </User>
        </Link>

        <Link to="/user/18">
          <User>
            <Icon>
              <img src={Profile} alt="Profile Icon" />
            </Icon>
            <div>
              <Name>
                Cecilia <br /> id: 18
              </Name>
            </div>
          </User>
        </Link>
      </UserContainer>
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  padding: 70px 0 0 107px;
`;
const Header = styled.header`
  h1 {
    font-size: 48px;
    font-weight: 500;

    span {
      color: red;
    }
  }

  p {
    margin-top: 40px;
    font-size: 18px;
  }
`;

const UserContainer = styled.div`
  display: flex;
  max-width: 300px;
  padding: 20px 0;

  a {
    margin-right: 15px;
    color: #000000;
  }
`;

const User = styled.div`
  background: #fbfbfb;
  height: 124px;
  min-width: 250px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 32px;
  -webkit-box-shadow: 0px 0px 14px 1px rgba(151, 151, 151, 0.8);
  box-shadow: 0px 0px 14px 1px rgba(151, 151, 151, 0.8);
`;

const Name = styled.span`
  background: #fbfbfb;
  font-weight: 700;
  font-size: 20px;
`;

const Icon = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
  margin-right: 24px;

  img {
    width: 1.9vw;
  }
`;

export default Home;
