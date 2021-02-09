import mongoose from "mongoose";

const Schema = mongoose.Schema;
const pollSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userFeeling: {
      type: String,
    },
    userWalkTime: {
      type: String,
    },
    hobbies: {
      type: [String],
    },
    number: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Poll = mongoose.model("poll", pollSchema);

export default Poll;
