'use strict';

import Dexie from 'dfahlander/Dexie.js';
import customerFixtures from './fixtures/customer_dt.js';
import customerAnalyticsFixtures from './fixtures/customer_analytics_dt.js';

/**
 * Database name
 * @type {string}
 */
const DATABASE_NAME = 'cm';

/**
 * Database version
 * @type {number}
 */
const DATABASE_VERSION = 1;

/**
 * Tables definition
 * For each database version include a new version of fixtures and table schema
 * @todo: Ideally this should go into separate classes representing models with table schema, form composition and validation rules
 * @type {*[]}
 */
var tableDefinition = [
  {
    name: 'customers',
    schema: [
      'CustomerID++,FirstName,LastName,Birthday,Gender,LastContact,CustomerLifetimeValue'
    ],
    fixtures: [
      customerFixtures
    ]
  },
  {
    name: 'analytics',
    schema: [
      'Id++,CustomerID,Pages'
    ],
    fixtures: [
      customerAnalyticsFixtures
    ]
  }
];

/**
 * Database - a Dexie (IndexedDB wrapper) extension
 * @constructor
 * @property {*} dbSchemas - object representing schemas of all available tables based on the current DB version
 * @property {*} fixtures - fixtures manager
 * @property {Function} fixtures.load - fixtures loader
 */
export default class Database extends Dexie {
  /**
   * Constructor
   */
  constructor() {
    super(DATABASE_NAME);
    this.version(DATABASE_VERSION).stores(this.dbSchemas);

    this.on('error', function(e) {
      console.error (e.stack || e);
    });

    this.open();
  }

  get dbSchemas() {
    let stores = {};
    tableDefinition.forEach(tblDefinition => {
      stores[tblDefinition.name] = tblDefinition.schema[DATABASE_VERSION-1];
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
          return Promise.resolve(loadTableFixtures(tblDefinition.name, tblDefinition.fixtures[DATABASE_VERSION-1]));
        }));
      }
    };
  }
}