//@ts-check
/*----------------------*\
        OBJECT MODEL
\*----------------------*/

/**
 * @class
 * @classdesc recreate a custom structured object 
 */
class Performance {
  /**
   * @param {Object} performances User's performances metrics
   * @param {Number} performances.userId User's id
   * @param {Object} performances.kind Type of performances (cardio, energy...)
   * @param {Array} performances.data User Performance Metrics data
   */
  constructor({ userId, kind, data }) {
    this.id = userId;
    this.kind = kind;
    this.data = data;
  }
}
export default Performance;
