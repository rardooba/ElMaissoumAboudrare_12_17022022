import User from "../Models/User";
import Activity from "../Models/Activity";
import SessionAverage from "../Models/SessionAverage";
import Performance from "../Models/Performance";

import configMockedData from "../mockedData/configMockedData";
import {
  users,
  activities,
  sessionsList,
  performances,
} from "../mockedData/data";

const { mockedData } = configMockedData;

const getIndexMockedData = (id) => {
  const userIndex = users.findIndex((user) => user.id === id);
  return userIndex;
};

export const getUser = (id) => {
  if (mockedData) {
    const i = getIndexMockedData(id);
    return {
      user: users[i],
    };
  } else {
    return fetch(`http://localhost:3000/${id}`)
      .then((res) => res.json())
      .then((data) => {
        new User(
          data.id,
          data.keyData,
          data.todayScore || data.score,
          data.userInfos
        );
      })
      .catch((error) => console.error("Get User f(x)", error));
  }
};

export const getActivity = (id) => {
  if (mockedData) {
    const i = getIndexMockedData(id);
    return {
      activity: activities[i],
    };
  } else {
    return fetch(`http://localhost:3000/${id}/activity`)
      .then((res) => res.json())
      .then((data) => {
        new Activity(data.userId, data.sessions);
      })
      .catch((error) => console.error("Get Activity f(x)", error));
  }
};

export const getPerformance = (id) => {
  if (mockedData) {
    const i = getIndexMockedData(id);
    return {
      performance: performances[i],
    };
  } else {
    return fetch(`http://localhost:3000/${id}/performance`)
      .then((res) => res.json())
      .then((data) => {
        new Performance(data.userId, data.kind, data.data);
      })
      .catch((error) => console.error("Get Performance f(x)", error));
  }
};

export const getAverageSessions = (id) => {
  if (mockedData) {
    const i = getIndexMockedData(id);
    return {
      sessionsAverage: sessionsList[i],
    };
  } else {
    return fetch(`http://localhost:3000/${id}/average-sessions`)
      .then((res) => res.json())
      .then((data) => {
        new SessionAverage(data.userId, data.sessions);
      })
      .catch((error) => console.error("Get Average Sessions f(x)", error));
  }
};


