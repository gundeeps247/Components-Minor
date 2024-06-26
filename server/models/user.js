const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true,  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // role: { type: String, enum: ['student', 'faculty', 'admin'], default: 'student' },
  // dateOfBirth: { type: Date, required: true },
  // pic: {
  //   type: String,
  //   default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  // },
});

module.exports = mongoose.model('User', userSchema);
