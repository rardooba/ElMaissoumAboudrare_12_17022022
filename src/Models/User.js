//@ts-check
/*----------------------*\
        OBJECT MODEL
\*----------------------*/

/**
 * @class
 * @classdesc recreate a custom structured object 
 */
class User {
  /**
   * @param {Object} users User's infos
   * @param {Number} users.id User's id
   * @param {Object} users.userInfos User's identity (first and last name + age)
   * @param {Number} [users.score] users.score User's day score
   * @param {Number} [users.todayScore] User's day score
   * @param {Object} users.keyData User's body metrics
   */
  constructor({ id, userInfos, score, todayScore, keyData }) {
    this.id = id;
    this.userInfos = userInfos;
    this.todayScore = todayScore || score;
    this.keyData = keyData;
  }
}
export default User;
