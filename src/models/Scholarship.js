const mongoose = require("mongoose");
const { Schema } = mongoose;

const ScholarshipSchema = new Schema(
  {
    description: {
      type: String,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Scholarship", ScholarshipSchema);
