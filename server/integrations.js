import { createMessageAdapter } from "@slack/interactive-messages";
import { WebClient } from "@slack/web-api";
import { polls } from "./polls";
import { currentUserId } from "./helpers/responseUtil";
import Poll from "./models/poll";

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;
const token = process.env.SLACK_BOT_TOKEN;
const slackInteractions = createMessageAdapter(slackSigningSecret);
const web = new WebClient(token);

const channelId = {
  id: "",
};

export const listenForInteractions = (app) => {
  app.use("/slack/actions", slackInteractions.requestListener());
};

slackInteractions.action({ type: "select" }, (payload) => {
  respondToSelectDropdown(payload);
});

slackInteractions.action({ type: "multi_static_select" }, async (payload) => {
  channelId.id = payload.channel.id;
  const responseData = payload.actions[0].selected_options.map(
    ({ value }) => value
  );

  if (responseData.length > 0) {
    try {
      console.log(responseData);
      const res = await Poll.findOneAndUpdate(
        { userId: currentUserId },
        { $set: { hobbies: responseData } }
      );
      console.log(res);
      await web.views.open({
        trigger_id: payload.trigger_id,
        view: polls.forthQuestion,
      });
    } catch (error) {
      console.log(error);
    }
    return {
      response_action: "clear",
    };
  }
});

slackInteractions.viewSubmission(
  "walk_day_time_modal_submit",
  async (payload) => {
    const blockData = payload.view.state;
    const walkDay =
      blockData.values.walk_day_time_selection_block.walk_day_selection_element
        .selected_option.value;
    const walkTime =
      blockData.values.walk_time_selection_block.timepicker123.selected_time;

    if (walkDay && walkTime) {
      try {
        await Poll.findOneAndUpdate(
          { userId: currentUserId },
          { userWalkTime: `${walkDay} at ${walkTime}` }
        );
        await web.chat.postMessage({
          channel: channelId.id,
          text: "",
          attachments: [polls.thirdQuestion],
        });
      } catch (error) {
        console.log(error);
      }

      return {
        response_action: "clear", // clears the modal
      };
    }
  }
);

slackInteractions.viewSubmission("number_modal_submit", async (payload) => {
  const blockData = payload.view.state;
  const numberInput = blockData.values.number_block.number_element.value;

  if (isNaN(numberInput)) {
    return {
      response_action: "errors",
      errors: {
        number_block: "input must be a number.",
      },
    };
  } else if (numberInput.length !== 3) {
    return {
      response_action: "errors",
      errors: {
        number_block: "input must be 3 characters.",
      },
    };
  } else {
    try {
      await Poll.findOneAndUpdate(
        { userId: currentUserId },
        { number: numberInput }
      );
      await web.chat.postMessage({
        channel: channelId.id,
        text: "",
        attachments: [polls.thankYouMsg],
      });
    } catch (error) {
      console.log(error);
    }
  }

  return {
    response_action: "clear", // clears the modal
  };
});

const respondToSelectDropdown = async (payload) => {
  const selectedOption = payload.actions[0].selected_options[0].value;
  const id = payload.callback_id;

  channelId.id = payload.channel.id;

  if (id === "greeting") {
    try {
      await Poll.findOneAndUpdate(
        { userId: currentUserId },
        { userFeeling: selectedOption }
      );
      await web.views.open({
        trigger_id: payload.trigger_id,
        view: polls.secondQuestion,
      });
    } catch (e) {
      console.log(e);
    }

    // The return value is used to update the message where the action occurred immediately.
    // Use this to items like buttons and menus that you only want a user to interact with once.
    return {
      text: "Processing...",
    };
  }

  // Return a replacement message
  return { text: "Processing..." };
};
