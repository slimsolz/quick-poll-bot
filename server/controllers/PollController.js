import Poll from "../models/poll";
import { errorResponse, successResponse } from "../helpers/responseUtil";
import "babel-polyfill";

class PollController {
  static async getAllPolls(req, res, next) {
    try {
      const polls = await Poll.find();
      successResponse(res, 200, "poll retrieved successfully", polls);
    } catch (err) {
      next(err);
    }
  }

  static async deleteAllPolls(req, res, next) {
    try {
      await Poll.deleteMany({});
      successResponse(res, 200, "polls deleted successfully", []);
    } catch (err) {
      next(err);
    }
  }
}

export default PollController;
