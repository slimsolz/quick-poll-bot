import Poll from "../models/poll";
import { errorResponse, successResponse } from "../helpers/responseUtil";
import "babel-polyfill";

class PollController {
  static async createPoll(req, res, next) {
    try {
      const pollData = new Poll({
        userFeeling: "good",
        userWalkTime: "Monday 10:30",
        hobbies: ["basketball", "tennis", "movies"],
        number: 890,
      });
      const newPoll = await pollData.save();
      successResponse(res, 201, "poll created successfully", newPoll);
    } catch (err) {
      next(err);
    }
  }
}

export default PollController;
