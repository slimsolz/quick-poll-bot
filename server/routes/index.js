import express from "express";
import { errorResponse, successResponse } from "../helpers/responseUtil";
import PollController from "../controllers/PollController";

const router = express.Router();

router.get("/", (req, res) => {
  successResponse(res, 200, "My quick-poll-bot API");
});

router.get("/polls", PollController.getAllPolls);
router.delete("/polls", PollController.deleteAllPolls);

router.all("*", (req, res) => {
  errorResponse(res, 404, "404 Page not found.");
});

export default router;
