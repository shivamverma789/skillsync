const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/instainsta");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
},
name: {
    type: String,
    required: true,
},
password: {
    type: String,
    required: true,
},
role: {
    type: String,
    enum: ['client', 'freelancer'],
    required: true,
},
profilePicture: {
    type: String,
    default: 'default-pic.jpg', // Path to default profile picture
},
bio: {
    type: String,
},

skills: [{
  type: String,
  trim: true,
}], // Array of skills (only relevant for freelancers)

availability: {
  type: String,
  enum: ['busy', 'available'], // Enum for availability
  default: 'available',
}, // Only relevant for freelancers

chargesPerHour: {
    type: Number,
}, // Only relevant for freelancers

linkedin: {
    type: String,
    trim: true,
}, // Only relevant for freelancers

github: {
    type: String,
    trim: true,
}, // Only relevant for freelancers

postedProjects: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'project',
}], // Array of project IDs the client has posted

workedOnProjects: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'project',
}], 

certificates: [{
  type: String,
  trim: true,
}], // Array of certificate names

projects: [{
  type: String,
  trim: true,
}],
},
{
  timestamps: true, // Automatically manage createdAt and updatedAt fields
}
)

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);