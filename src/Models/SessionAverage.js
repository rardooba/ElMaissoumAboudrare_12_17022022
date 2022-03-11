//@ts-check
/*----------------------*\
        OBJECT MODEL
\*----------------------*/

/**
 * @class
 * @classdesc recreate a custom structured object 
 */
class SessionAverage {
  /**
   * @param {Object} sessionsList User's sessions average
   * @param {Number} sessionsList.userId User's id
   * @param {Array} sessionsList.sessions User's sessions average data (day, session Length)
   */
  constructor({ userId, sessions }) {
    this.userId = userId;
    this.sessions = sessions;
  }
}
export default SessionAverage;
