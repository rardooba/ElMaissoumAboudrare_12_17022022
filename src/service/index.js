//MODELS
import User from "../Models/User";
import Activity from "../Models/Activity";
import SessionAverage from "../Models/SessionAverage";
import Performance from "../Models/Performance";

//MOCKED DATA + CONFIG
import { mockedData } from "../mockedData/configMockedData";
import {
  users,
  activities,
  sessionsList,
  performances,
} from "../mockedData/data";

//Show in browser console if data is simulated
console.log("Mocked DATA is", mockedData);

/**
 * GET INDEX from MOCKED DATA to target user data
 * @function
 * @param {String} id user
 * @returns 
 */
const getIndexMockedData = (id) => {
  const userIndex = users.findIndex((user) => user.id === id);
  return userIndex;
};

/*------------------*\
        SERVICE
\*------------------*/

/**
 * Sets the User infos here
 * Send custom request using fetch api
 * @param {String} id
 * @return {Promise}
 * @return {Promise.resolve<Object>} users or new User()
 * @return {Promise.reject<Error>} error
 */
export const getUser = async (id) => {
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
      .catch((error) => console.error("Get User f(x)", error));
  }
};

/**
 * Sets the Activity here
 * Send custom request using fetch api
 * @param {String} id
 * @return {Promise}
 * @return {Promise.resolve<Object>} activities or new Activity()
 * @return {Promise.reject<Error>} error
 */
export const getActivity = async (id) => {
  if (mockedData) {
    const i = getIndexMockedData(id);
    return new Promise((resolve) => {
      resolve(new Activity(activities[i]));
    });
  } else {
    return fetch(`http://localhost:3000/user/${id}/activity`)
      .then((res) => res.json())
      .then((user) => new Activity(user.data))
      .catch((error) => console.error("Get Activity f(x)", error));
  }
};

/**
 * Sets the Performance here
 * Send custom request using fetch api
 * @param {String} id
 * @return {Promise}
 * @return {Promise.resolve<Object>} performances or new Performance()
 * @return {Promise.reject<Error>} error
 */
export const getPerformance = async (id) => {
  if (mockedData) {
    const i = getIndexMockedData(id);
    return new Promise((resolve) => {
      resolve(new Performance(performances[i]));
    });
  } else {
    return fetch(`http://localhost:3000/user/${id}/performance`)
      .then((res) => res.json())
      .then((user) => new Performance(user.data))
      .catch((error) => console.error("Get Performance f(x)", error));
  }
};

/**
 * Sets the Average Sessions here
 * Send custom request using fetch api
 * @param {String} id
 * @return {Promise}
 * @return {Promise.resolve<Object>} sessionsList or new SessionAverage()
 * @return {Promise.reject<Error>} error
 */
export const getAverageSessions = async (id) => {
  if (mockedData) {
    const i = getIndexMockedData(id);
    return new Promise((resolve) => {
      resolve(new SessionAverage(sessionsList[i]));
    });
  } else {
    return fetch(`http://localhost:3000/user/${id}/average-sessions`)
      .then((res) => res.json())
      .then((user) => new SessionAverage(user.data))
      .catch((error) => console.error("Get Average Sessions f(x)", error));
  }
};
