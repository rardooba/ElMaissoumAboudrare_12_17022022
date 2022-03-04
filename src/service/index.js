//MODELS
import User from "../Models/User";
import Activity from "../Models/Activity";
import SessionAverage from "../Models/SessionAverage";
import Performance from "../Models/Performance";

//MOCKED DATA + CONFIG
import {mockedData} from "../mockedData/configMockedData";
import {
  users,
  activities,
  sessionsList,
  performances,
} from "../mockedData/data";


//DESTRUCTURING MOCKED DATA
//const { mockedData } = configMockedData;


console.log('Mocked DATA is', mockedData);

//GET INDEX MOCKED DATA
const getIndexMockedData = (id) => {
  const userIndex = users.findIndex((user) => user.id === id);
  return userIndex;
};

//SERVICES

export const getUser = (id) => {
  if (mockedData) {
    const i = getIndexMockedData(id);
    // return users[i];
    return new Promise((resolve) => {
      resolve(new User(users[i]));
    });
  } else {
    return fetch(`http://localhost:3000/user/${id}`)
      .then((res) => res.json())
      .then((user) => new User(user.data))
      .catch((error) => console.error("Get User f(x)", error))
  }
};

export const getActivity = (id) => {
  if (mockedData) {
    const i = getIndexMockedData(id);
    return new Promise((resolve) => {
      resolve(new Activity(activities[i]));
    });
  } else {
    return fetch(`http://localhost:3000/user/${id}/activity`)
      .then((res) => res.json())
      .then((user) => new Activity(user.data))
      .catch((error) => console.error("Get Activity f(x)", error))
  }
};

export const getPerformance = (id) => {
  if (mockedData) {
    const i = getIndexMockedData(id);
    return new Promise((resolve) => {
      resolve(new Performance(performances[i]));
    });
  } else {
    return fetch(`http://localhost:3000/user/${id}/performance`)
      .then((res) => res.json())
      .then((user) => new Performance(user.data))
      .catch((error) => console.error("Get Performance f(x)", error))
  }
};

export const getAverageSessions = (id) => {
  if (mockedData) {
    const i = getIndexMockedData(id);
    return new Promise((resolve) => {
      resolve(new SessionAverage(sessionsList[i]));
    });
  } else {
    return fetch(`http://localhost:3000/user/${id}/average-sessions`)
      .then((res) => res.json())
      .then((user) => new SessionAverage(user.data))
      .catch((error) => console.error("Get Average Sessions f(x)", error))
  }
};
