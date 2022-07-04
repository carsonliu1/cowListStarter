const Cow = require('../database/mongo/index.js')

module.exports = {
  getAll: (cb) => {
    Cow.find({})
      .then(data => cb(null, data))
      .catch(err => cb(err))
  },
  submit: (body, cb) => {
    Cow.create({
      name: body.name,
      description: body.description
    }).then(data => cb(null, data))
      .catch(err => cb(err))
  },
  removal: (id, cb) => {
    Cow.findByIdAndDelete(id)
      .then(data => cb(null, data))
      .catch(err => cb(err))
  },
  update: (id, body, cb) => {
    const { name, description } = body
    Cow.findByIdAndUpdate(id,{name, description})
      .then(data => cb(null, data))
      .catch(err => cb(err))
  }
}