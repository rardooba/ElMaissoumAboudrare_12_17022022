/**
 * Configure mocked Data here
 * @param {*} env 
 * @returns 
 */
const stringTOboolean = (env) => {
  return env === "true" ? true : false;
};
export const mockedData = stringTOboolean(process.env.REACT_APP_MOCK_CONFIG);
