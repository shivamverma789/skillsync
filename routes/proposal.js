const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
    freelancer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Reference to the freelancer who submitted the proposal
        required: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project', // Reference to the project the proposal is for
        required: true,
    },
    proposalText: {
        type: String,
        required: true,
    },
    estimatedCost: {
        type: Number,
        required: true,
    },
    submissionDate: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

module.exports = mongoose.model('proposal', proposalSchema);
