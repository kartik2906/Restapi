const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  posteddate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("jobposts", jobSchema);
