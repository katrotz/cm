'use strict';

export default class NotFoundController{
  static get $inject() {
    return [];
  }

  constructor() {
    console.log('NotFound');
  }
}