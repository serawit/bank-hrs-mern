const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  title: String,
  content: String,
  status: { type: String, enum: ['Submitted', 'Reviewed', 'Approved'], default: 'Submitted' },
  submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', reportSchema);
