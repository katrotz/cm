'use strict';

export default class CustomerCreateController{
  static get $inject() {
    return [
      'database'
    ];
  }

  constructor(database) {
    console.log(database);
  }
}