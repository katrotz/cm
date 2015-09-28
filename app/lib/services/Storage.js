'use strict';

import Database from './storage/Database.js';

export default class Storage{
  static get $inject() {
    return ['$q', '$rootScope'];
  }

  constructor($q, $rootScope) {
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.adapter_ = new Database();
  }

  get adapter() {
    return this.adapter_;
  }

  get(tblName, key) {
    return this.$q((resolve, reject) => {
      return this.adapter_.table(tblName).get(key).then(resolve, reject);
    });
  }

  put(tblName, value) {
    return this.$q((resolve, reject) => {

      let clone = this.adapter_.constructor.deepClone(value);
      if (typeof clone.$$hashKey !== 'undefined') {
        delete(clone.$$hashKey);
      }

      return this.adapter_.table(tblName).put(clone).then((...args) => {
        this.$rootScope.$broadcast('MODIFY::' + tblName.toUpperCase(), args[0]);
        return resolve.call(null, ...args);
      }, reject);
    });
  }

  add(tblName, value) {
    return this.$q((resolve, reject) => {
      return this.adapter_.table(tblName).add(value).then((...args) => {
        this.$rootScope.$broadcast('CREATE::' + tblName.toUpperCase(), args[0]);
        return resolve.call(null, ...args);
      }, reject);
    });
  }

  list(tblName) {
    return this.$q((resolve, reject) => {
      this.adapter_.table(tblName).toArray()
        .then(resolve, reject);
    });
  }

  listByIndex(tblName, index, key) {
    return this.$q((resolve, reject) => {
      this.adapter_.table(tblName).where(index).equals(key).toArray()
        .then(resolve, reject);
    });
  }

  remove(tblName, key) {
    return this.$q((resolve, reject) => {
      this.adapter_.table(tblName).delete(key)
        .then(() => {
          this.$rootScope.$broadcast('DELETE::' + tblName.toUpperCase(), [key]);
          return resolve();
        }, reject);
    });
  }

  loadFixtures() {
    return this.$q((resolve, reject) => {
      this.adapter_.fixtures.load()
        .then((result) => {
          if (result && result.length) {
            result.forEach((f) => {
              this.$rootScope.$broadcast('CREATE::' + f.name.toUpperCase(), f.rows.map((row) => {
                return row.CustomerID;
              }));
            });
          }
          return resolve();
        }, reject);
    });
  }
}