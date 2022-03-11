/*----------------------*\
        OBJECT MODEL
\*----------------------*/

/**
 * @class
 * @classdesc recreate a custom structured object 
 */
class Activity {
  /**
   * @param {Object} activities user's daily activity statistics
   * @param {Number} activities.id user's id
   * @param {Array} activities.sessions user's sessions data (day, kilogram, calories)
   */
  constructor({ id, sessions }) {
    this.userId = id;
    this.sessions = sessions;
  }
}
export default Activity;
