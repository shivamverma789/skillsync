const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    domain: {
        type: String,
        required: true,
    },

    requiredSkills: [{
        type: String,
    }], // Array of required skills for the project

    estimatedBudget: {
        type: Number,
        required: true,
    },

    deadline: {
        type: Date,
        required: true,
    },

    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Reference to the user model (the client who posted the project)
        required: true,
    },

    assignedFreelancer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Reference to the user model (the freelancer assigned to the project)
        default: null, // Initially, no freelancer is assigned
    },

}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

module.exports = mongoose.model('project', projectSchema);
