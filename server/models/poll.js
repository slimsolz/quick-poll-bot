import mongoose from "mongoose";

const Schema = mongoose.Schema;
const pollSchema = new Schema(
  {
    userFeeling: {
      type: String,
      required: true,
    },
    userWalkTime: {
      type: String,
      required: true,
    },
    hobbies: {
      type: [String],
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Poll = mongoose.model("poll", pollSchema);

export default Poll;
