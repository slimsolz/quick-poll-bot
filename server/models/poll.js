import mongoose from "mongoose";

const Schema = mongoose.Schema;
const pollSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
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

const Blog = mongoose.model("poll", pollSchema);

export default Blog;
