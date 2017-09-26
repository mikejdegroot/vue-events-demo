const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Event = require('../models/event');

mongoose.connect(dbURI);

// Seeds here
Event.collection.drop();

Event.create([{
  title: 'club night',
  dateFrom: '01/06/2017',
  dateTo: '02/06/2017',
  location: 'London',
  description: 'Gonna be a good one'
}, {
  title: 'daytime drinks',
  dateFrom: '05/06/2017',
  dateTo: '07/06/2017',
  location: 'Brighton',
  description: 'Some lovely daytime drinks'
}])
.then(events => console.log(`${events.length} events created!`))
.catch(err => console.log(err))
.finally(() => mongoose.connection.close());
