import "dotenv/config";
import express from "express";
import {
  verifyKeyMiddleware,
  InteractionResponseType,
  MessageComponentTypes,
  ButtonStyleTypes,
} from "discord-interactions";

const app = express();
const PORT = process.env.PORT || 3000;

const verify = verifyKeyMiddleware(process.env.PUBLIC_KEY);

app.post("/interactions", verify, (req, res) => {
  const { data } = req.body;
  const contentTitle = data?.options[0]?.value;

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: `${contentTitle}`,
      embeds: [
        {
          image: {
            url: "https://images.unsplash.com/photo-1730718226145-42f92cda935c?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        },
      ],
      components: [
        {
          type: MessageComponentTypes.ACTION_ROW,
          components: [
            {
              type: MessageComponentTypes.BUTTON,
              style: ButtonStyleTypes.LINK,
              label: "Download",
              url: "https://cdn.wallpaperhub.app/cloudcache/4/3/0/b/1/6/430b16037a662ded50458ffa28c32fae675d04b2.jpg",
            },
          ],
        },
      ],
    },
  });
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
