import { createEventAdapter } from "@slack/events-api";
import { WebClient } from "@slack/web-api";
import { polls } from "./polls";

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;
const token = process.env.SLACK_BOT_TOKEN;

const slackEvents = createEventAdapter(slackSigningSecret);
const web = new WebClient(token);

export const listenForEvents = (app) => {
  app.use("/events", slackEvents.requestListener());

  slackEvents.on("app_mention", (event) => {
    respondToEvent(event.channel);
  });

  // All errors in listeners are caught here. If this weren't caught, the program would terminate.
  slackEvents.on("error", (error) => {
    console.log(`error: ${error}`);
  });
};

export const respondToEvent = async (channelId) => {
  try {
    await web.chat.postMessage({
      channel: channelId,
      text: "",
      attachments: [polls.firstQuestion],
    });
  } catch (error) {
    console.log(error);
  }
};
