import "dotenv/config";
import { InstallGlobalCommands } from "./utils.js";

const GENERATE_WALLPAPER = {
  name: "generate",
  description: "generate wallpaper based on query",
  options: [
    {
      type: 3,
      name: "object",
      description: "generation description",
      required: true,
    },
  ],
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 2],
};

InstallGlobalCommands(process.env.APP_ID, [GENERATE_WALLPAPER]);
