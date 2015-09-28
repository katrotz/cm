'use strict';

export default class Storage{
  constructor($q, $rootScope) {
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.shouldFail = false;
    this.done = false;
    this.delay = 10;
    this.resolve = null;
    this.reject = null;
  }

  _setDelay_(delay) {
    this.delay = delay;
    return this;
  }

  _setResolve_(data) {
    this.resolve = data;
    return this;
  }

  _setReject_(error) {
    this.reject = error;
    return this;
  }

  _setShouldFail_(flag) {
    this.shouldFail = !!flag;
    return this;
  }

  _setDoneCb_(fn) {
    if (typeof fn === 'function') {
      this.done = fn;
    }
    return this;
  }

  asyncCall_() {
    let delay = this.delay;
    function wrapAsync(fn1, fn2) {
      setTimeout(function() {
        fn1();fn2();
      }, delay);
    }

    return this.$q((resolve, reject) => {
      let shouldFail = this.shouldFail;
      let resultData = this.resolve;
      let resultError = this.reject;
      function fn() {
        return shouldFail? reject(resultError) : resolve(resultData);
      }

      if (this.done) {
        wrapAsync(fn, this.done);
      } else {
        fn();
      }
    });
  }

  /**
   * Mocked services
   */

  remove() {
    return this.asyncCall_();
  }

  add() {
    return this.asyncCall_();
  }

  get() {
    return this.asyncCall_();
  }

  put() {
    return this.asyncCall_();
  }

  list() {
    return this.asyncCall_();
  }

  listByIndex() {
    return this.asyncCall_();
  }

  loadFixtures() {
    return this.asyncCall_();
  }
}