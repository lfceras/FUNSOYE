const {Schema, model} = require('mongoose')

const paymentSchema = new Schema({
  preferenceId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = model('Payment', paymentSchema)