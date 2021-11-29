import { WebClient } from "@slack/web-api";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const client = new WebClient();

  const d = new Date();
  const randInt = Math.floor(Math.random() * 9999);
  const minute = d.getMinutes();
  const zwj = "‎";

  const slackRequest = await client.chat.postMessage({
    token: process.env.SLACK_TOKEN,
    channel: process.env.INTERNALS_CHANNEL_ID,
    text: `yeah (${minute} mminutes)`,
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `y${zwj.repeat(minute*randInt)}e${zwj.repeat(minute)}a${zwj.repeat(minute*randInt)}h (${minute} minutes) \n\n_Sent via <#C02EA7XCGKW>_`
        }
      }
    ]
    
  });
  res.send("thump thump");
};
