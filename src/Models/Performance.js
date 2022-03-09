/*----------------------*\
        OBJECT MODEL
\*----------------------*/

/**
 * @class
 * @classdesc recreate a custom structured object 
 */
class Performance {
  /**
   * @param {Object.<id: Number, kind: Object, data: Array>}
   */
  constructor({ userId, kind, data }) {
    this.id = userId;
    this.kind = kind;
    this.data = data;
  }
}
export default Performance;
