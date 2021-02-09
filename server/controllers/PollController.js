import Poll from "../models/poll";
import { errorResponse, successResponse } from "../helpers/responseUtil";
import "babel-polyfill";

class PollController {
  static async getAllPolls(req, res, next) {
    try {
      const polls = await Poll.find();
      return successResponse(res, 200, "poll retrieved successfully", polls);
    } catch (err) {
      /* istanbul ignore next */
      next(err);
    }
  }

  static async deleteAllPolls(req, res, next) {
    try {
      await Poll.deleteMany({});
      return successResponse(res, 200, "polls deleted successfully", []);
    } catch (err) {
      /* istanbul ignore next */
      next(err);
    }
  }
}

export default PollController;
