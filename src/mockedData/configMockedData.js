
//* Here is the environment variable configuration

/**
 * Convert string = 'true' to boolean = true
 * @param {String} env 
 * @returns {Boolean} 
 * @author Rardooba
 * @version 1.0
 */
const stringTOboolean = (env) => {
  return env === "true" ? true : false;
};

//Activation response of data mocked 
export const mockedData = stringTOboolean(process.env.REACT_APP_MOCK_CONFIG);
