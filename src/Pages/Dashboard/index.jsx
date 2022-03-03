import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import {
  getUser,
  getActivity,
  getPerformance,
  getAverageSessions,
} from "../../service";

import UserMetrics from "../../Components/Charts/UserMetrics";
import UserActivity from "../../Components/Charts/UserActivity";
import UserWelcome from "../../Components/Charts/UserWelcome";
import UserAverageSessions from "../../Components/Charts/UserAverageSessions";
import UserPerformance from "../../Components/Charts/UserPerformance";
import UserScore from "../../Components/Charts/UserScore";

const Dashboard = () => {
  let { id } = useParams();

  const [userInfosData, setUserInfosData] = useState({});
  const [userActivityData, setUserActivityData] = useState({});
  const [userAverageSessionsData, setUserAverageSessionsData] = useState({});
  const [userPerformanceData, setUserPerformanceData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      const getUserOBJ = await getUser(parseInt(id));
      const getActivityOBJ = await getActivity(parseInt(id));
      const getAverageSessionsOBJ = await getAverageSessions(parseInt(id));
      const getPerformanceOBJ = await getPerformance(parseInt(id));

      setUserInfosData(getUserOBJ);
      setUserActivityData(getActivityOBJ);
      setUserAverageSessionsData(getAverageSessionsOBJ);
      setUserPerformanceData(getPerformanceOBJ);

      setIsLoaded(true);

      //! besoin de clean ?
    };
    getUserData();
  }, [id]);

  console.log("user infos", userInfosData.keyData);
  console.log("Activity", userActivityData);
  console.log("Average Sessions", userAverageSessionsData);
  console.log("Performance", userPerformanceData);

  return (
    <Main>
      {isLoaded ? (
        <>
          <UserWelcome dataName={userInfosData.userInfos.firstName} />
          <ChartsContainer>
            <Charts>
              <UserActivity dataActivity={userActivityData} />
              <UserAverageSessions dataSessions={userAverageSessionsData.sessions} />
              <UserPerformance dataPerformance={userPerformanceData} />
              <UserScore dataScore={userInfosData.todayScore} />
            </Charts>
            <UserMetrics dataMetrics={userInfosData.keyData} />
          </ChartsContainer>
        </>
      ) : (
        <div>Chargement des données en cours...</div>
      )}
    </Main>
  );
};

const Main = styled.section`
  width: 100%;
  padding: 0 0 0 107px;
`;

const ChartsContainer = styled.article`
  min-height: 610px;
  display: flex;
  margin-top: 77px;
`;

const Charts = styled.div`
  width: 835px;
  margin: 0 30px 0 0;
  display: flex;
  flex-wrap: wrap;
`;

export default Dashboard;
