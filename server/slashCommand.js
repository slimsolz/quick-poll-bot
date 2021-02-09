import bodyParser from "body-parser";
import { polls } from "./polls";

export const listenForCommands = async function (app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.post("/slack/commands", (req, res) => {
    const { token } = req.body;

    if (token !== process.env.SLACK_VERIF_TOKEN) {
      console.log("Invalid token");
      return;
    }

    res.status(200).send({ attachments: [polls.firstQuestion] });
  });
};
