/*----------------------*\
        OBJECT MODEL
\*----------------------*/

/**
 * @class
 * @classdesc recreate a custom structured object 
 */
class Activity {
  /**
   * @param {Object.<userId: Number, sessions: Array>}
   */
  constructor({ id, sessions }) {
    this.userId = id;
    this.sessions = sessions;
  }
}
export default Activity;
