class User {
  constructor({ id, userInfos, score, todayScore, keyData }) {
    this.id = id;
    this.userInfos = userInfos;
    this.todayScore = todayScore || score;
    this.keyData = keyData;
  }
}
export default User;
