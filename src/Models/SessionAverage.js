/*----------------------*\
        OBJECT MODEL
\*----------------------*/

/**
 * @class
 * @classdesc recreate a custom structured object 
 */
class SessionAverage {
  /**
   * @param {Object.<userId: Number, sessions: Array>}
   */
  constructor({ userId, sessions }) {
    this.userId = userId;
    this.sessions = sessions;
  }
}
export default SessionAverage;
