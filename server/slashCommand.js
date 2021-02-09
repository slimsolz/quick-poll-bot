import bodyParser from "body-parser";
import { polls } from "./polls";
import Poll from "./models/poll";
import { currentUserId } from "./helpers/responseUtil";

export const listenForCommands = async function (app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.post("/slack/commands", async (req, res) => {
    const { token } = req.body;

    if (token !== process.env.SLACK_VERIF_TOKEN) {
      console.log("Invalid token");
      return;
    }

    const pollData = new Poll({ userId: currentUserId });
    await pollData.save();

    res.status(200).send({ attachments: [polls.firstQuestion] });
  });
};
