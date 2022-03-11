/**
 * @file service/index.js this is the manager of API calls
 * @see <a href="https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard" target="_blank">The micro API</a>
 */

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
 * @param {String} id user id from Url param
 * @returns {Number} userIndex
 */
const getIndexMockedData = (id) => {
  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  return userIndex;
};

/*------------------*\
        SERVICE
\*------------------*/

/**
 * Sets the User infos here
 * Send custom request using fetch api
 * @param {String} id
 * @returns {Promise} users or new User()
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
      .then((user) => new User(user.data));
  }
};

/**
 * Sets the Activity here
 * Send custom request using fetch api
 * @param {String} id
 * @returns {Promise} activities or new Activity()
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
      .then((user) => new Activity(user.data));
  }
};

/**
 * Sets the Performance here
 * Send custom request using fetch api
 * @param {String} id
 * @returns {Promise} performances or new Performance()
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
      .then((user) => new Performance(user.data));
  }
};

/**
 * Sets the Average Sessions here
 * Send custom request using fetch api
 * @param {String} id
 * @returns {Promise} sessionsList or new SessionAverage()
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
      .then((user) => new SessionAverage(user.data));
  }
};
