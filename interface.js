function InheritProperty(childObject, sourceObject) {
  /**This is where the child class inherites from the parent class prototypically */
  childObject.prototype = Object.create(sourceObject.prototype);

  /**we will have to manually assign the constructor to the
   *  child constructor because the child currently has the parent constructor.
   * */
  childObject.constructor = childObject;
}

module.exports = InheritProperty;
