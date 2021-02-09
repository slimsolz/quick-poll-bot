export const polls = {
  firstQuestion: {
    text: "Welcome. How are you doing?",
    fallback: "Upgrade your Slack client to use messages like these.",
    color: "#3AA3E3",
    attachment_type: "default",
    callback_id: "greeting",
    actions: [
      {
        name: "greeting_list",
        text: "Select one",
        type: "select",
        options: [
          {
            text: "Doing Well",
            value: "doing well",
          },
          {
            text: "Neutral",
            value: "neutral",
          },
          {
            text: "Feeling Lucky",
            value: "feeling lucky",
          },
        ],
      },
    ],
  },
  secondQuestion: {
    type: "modal",
    callback_id: "walk_day_time_modal_submit", // We need to add this
    title: {
      type: "plain_text",
      text: "Quick Poll",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Done",
      emoji: true,
    },
    close: {
      type: "plain_text",
      text: "Cancel",
      emoji: true,
    },
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "When are you free this week for a walk?",
        },
      },
      {
        type: "input",
        block_id: "walk_day_time_selection_block", // put this here to identify the selection block
        element: {
          type: "static_select",
          action_id: "walk_day_selection_element", // put this here to identify the selection element
          placeholder: {
            type: "plain_text",
            text: "Select a day",
            emoji: true,
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "Sunday",
                emoji: true,
              },
              value: "Sunday",
            },
            {
              text: {
                type: "plain_text",
                text: "Monday",
                emoji: true,
              },
              value: "Monday",
            },
            {
              text: {
                type: "plain_text",
                text: "Tuesday",
                emoji: true,
              },
              value: "Tuesday",
            },
            {
              text: {
                type: "plain_text",
                text: "Wednesday",
                emoji: true,
              },
              value: "Wednesday",
            },
            {
              text: {
                type: "plain_text",
                text: "Thursday",
                emoji: true,
              },
              value: "Thursday",
            },
            {
              text: {
                type: "plain_text",
                text: "Friday",
                emoji: true,
              },
              value: "Friday",
            },
            {
              text: {
                type: "plain_text",
                text: "Saturday",
                emoji: true,
              },
              value: "Saturday",
            },
          ],
        },
        label: {
          type: "plain_text",
          text: "Choose a day to walk:",
          emoji: true,
        },
      },
      {
        type: "input",
        block_id: "walk_time_selection_block", // put this here to identify the input.
        element: {
          type: "timepicker",
          action_id: "timepicker123", // put this here to identify the selection element
          initial_time: "12:00",
          placeholder: {
            type: "plain_text",
            text: "Select a time",
          },
        },
        label: {
          type: "plain_text",
          text: "Pick a time for this day.",
          emoji: true,
        },
      },
    ],
  },
  thirdQuestion: {
    blocks: [
      {
        type: "section",
        block_id: "hobbies_selection_block",
        text: {
          type: "mrkdwn",
          text: "What are your favorite hobbies?",
        },
        accessory: {
          action_id: "text1234",
          type: "multi_static_select",
          placeholder: {
            type: "plain_text",
            text: "Select hobbies",
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "Football",
              },
              value: "Football",
            },
            {
              text: {
                type: "plain_text",
                text: "Music",
              },
              value: "Music",
            },
            {
              text: {
                type: "plain_text",
                text: "Sleep",
              },
              value: "Sleep",
            },
            {
              text: {
                type: "plain_text",
                text: "Movies",
              },
              value: "Movies",
            },
            {
              text: {
                type: "plain_text",
                text: "Basketball",
              },
              value: "Basketball",
            },
          ],
        },
      },
    ],
  },
  forthQuestion: {
    type: "modal",
    callback_id: "number_modal_submit", // We need to add this
    title: {
      type: "plain_text",
      text: "Quick Poll",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Done",
      emoji: true,
    },
    close: {
      type: "plain_text",
      text: "Cancel",
      emoji: true,
    },
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "What are the first 3 digits on the number scale?",
        },
      },
      {
        type: "input",
        block_id: "number_block", // put this here to identify the input.
        element: {
          type: "plain_text_input",
          action_id: "number_element", // put this here to identify the selection element
        },
        label: {
          type: "plain_text",
          text: "Enter number",
          emoji: true,
        },
      },
    ],
  },
  thankYouMsg: {
    text: "Thank You",
    fallback: "Upgrade your Slack client to use messages like these.",
    color: "#3AA3E3",
    attachment_type: "default",
    callback_id: "thank_you_id",
  },
};
