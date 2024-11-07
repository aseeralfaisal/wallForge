import { SlashCommandBuilder, SlashCommandStringOption } from "discord.js";

const generateCommand = new SlashCommandBuilder();

generateCommand
  .setName('genwall')
  .setDescription("generate wallpaper")
  .addStringOption((option: SlashCommandStringOption) =>
    option
      .setName("query")
      .setDescription("[query]")
      .setRequired(true)
  )
  .addStringOption((option: SlashCommandStringOption) =>
    option
      .setName("range")
      .setDescription("limit")
      .setRequired(false)
  )

export { generateCommand }
