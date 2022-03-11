
/**
 * @file mockedData/configMockedData.js here is the environment variable configuration
 */

/**
 * Convert string to boolean ex: 'true' > true
 * @param {String} env Value of environment variable
 * @returns {Boolean} true or false converted
 * @version 1.0
 */
const stringTOboolean = (env) => {
  return env === "true" ? true : false;
};

//Activation response of data mocked 
export const mockedData = stringTOboolean(process.env.REACT_APP_MOCK_CONFIG);
