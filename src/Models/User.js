/*----------------------*\
        OBJECT MODEL
\*----------------------*/

/**
 * @class
 * @classdesc recreate a custom structured object 
 */
class User {
  /**
   * @param {Object} users
   * @param {Number} users.id
   * @param {Object} users.userInfos
   * @param {Number} users.score
   * @param {Number} users.todayScore
   * @param {Object} users.keyData
   */
  constructor({ id, userInfos, score, todayScore, keyData }) {
    this.id = id;
    this.userInfos = userInfos;
    this.todayScore = todayScore || score;
    this.keyData = keyData;
  }
}
export default User;
