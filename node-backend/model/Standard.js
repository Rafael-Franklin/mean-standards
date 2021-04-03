const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Standard = new Schema({
  name: {
    type: String
  },
  code: {
    type: String
  },
  description: {
    type: String
  },
  dtpublication: {
    type: String
  },
  model: {
    type: String
  },
  business: {
    type: String
  },
  resume: {
    type: String
  },
  user: {
    type: String
  },
  email: {
    type: String
  }
}, {
  collection: 'standards'
})

module.exports = mongoose.model('Standard', Standard)
