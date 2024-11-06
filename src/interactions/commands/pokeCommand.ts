import { SlashCommandBuilder } from "discord.js";

const pokeCommand = new SlashCommandBuilder();

pokeCommand.setName("poke").setDescription("poke");

export { pokeCommand };


