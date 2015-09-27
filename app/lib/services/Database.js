'use strict';

import Dexie from 'dfahlander/Dexie.js';
import customerFixtures from './tables/fixtures/customer_dt.js';
import customerAnalyticsFixtures from './tables/fixtures/customer_analytics_dt.js';

const DATABASE_NAME = 'cm';
const DATABASE_VERSION = 1;

export default class Database extends Dexie {
  constructor() {
    super(DATABASE_NAME);
    this.version(DATABASE_VERSION).stores({
      customers: 'CustomerID++,FirstName,LastName,Birthday,Gender,LastContact,CustomerLifetimeValue',
      analytics: 'CustomerID++,Pages'
    });

    this.open();
  }
}

class Database2{
  static get $inject() {
    return [];
  }

  constructor() {
    this.adapter = new Dexie(this.databaseName);
    this.adapter.version(this.databaseVersion).stores(this.schemas);
    this.adapter.open();

    //this.loadFixtures();
    var c = this.adapter.customers.toArray();
    console.log(c);
  }

  get databaseName() {
    return DATABASE_NAME;
  }

  get databaseVersion() {
    return DATABASE_VERSION;
  }

  get schemas() {
    let customers = [
      'CustomerID++,FirstName,LastName,Birthday,Gender,LastContact,CustomerLifetimeValue'
    ];
    let customerAnalytics = [
      'CustomerID++,Pages'
    ];

    return {
      customers: customers[this.databaseVersion-1],
      customerAnalytics: customerAnalytics[this.databaseVersion-1]
    };
  }

  get fixtures() {
    return {
      customers: customerFixtures,
      customerAnalytics: customerAnalyticsFixtures
    };
  }

  loadFixtures() {
    this.adapter.tables.forEach(tbl => {
      tbl.clear().then(()=>{
        let fixtureData = this.fixtures[tbl.name] || [];

        fixtureData.forEach((row) => {
          this.adapter[tbl.name].add(row);
        });
      });
    });

    return this;
  }


}