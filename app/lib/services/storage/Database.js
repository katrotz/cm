'use strict';

import Dexie from 'dfahlander/Dexie.js';
import customerFixtures from './fixtures/customer_dt.js';
import customerAnalyticsFixtures from './fixtures/customer_analytics_dt.js';

const DATABASE_NAME = 'cm';

var tableDefinition = [
  {
    name: 'customers',
    schema: 'CustomerID++,FirstName,LastName,Birthday,Gender,LastContact,CustomerLifetimeValue',
    fixtures: customerFixtures
  },
  {
    name: 'analytics',
    schema: 'Id++,CustomerID,Pages',
    fixtures: customerAnalyticsFixtures
  }
];

export default class Database extends Dexie {
  constructor() {
    super(DATABASE_NAME);
    this.version(1).stores(this.dbSchemas);

    this.on('error', function(e) {
      console.error (e.stack || e);
    });

    this.open();
  }

  get dbSchemas() {
    let stores = {};
    tableDefinition.forEach(tblDefinition => {
      stores[tblDefinition.name] = tblDefinition.schema;
    });

    return stores;
  }

  get fixtures() {
    let _this = this;
    function loadTableFixtures(tableName, fixtureData) {
      let table = _this.table(tableName);
      return new Promise(function(resolve, reject) {
        table.clear()
          .then(() => {
            let rows = [];
            Promise.all(fixtureData.map((row) => {
              rows.push(row);
              return table.put(row);
            })).then(() => {
              return resolve({
                name: tableName,
                rows: rows
              });
            }, reject);
          }, reject);
      });
    }

    return {
      load() {
        return Promise.all(tableDefinition.map(tblDefinition => {
          return Promise.resolve(loadTableFixtures(tblDefinition.name, tblDefinition.fixtures));
        }));
      }
    };
  }
}