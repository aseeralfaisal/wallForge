import { SlashCommandBuilder } from "discord.js";

const quoteCommand = new SlashCommandBuilder();

quoteCommand.setName("quote")
  .setDescription("generate a quote");

export { quoteCommand };


