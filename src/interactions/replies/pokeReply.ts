import { ChatInputCommandInteraction, type CacheType } from "discord.js";

export async function pokeReply(interaction: ChatInputCommandInteraction<CacheType>) {
  try {
    await interaction.reply("👻");
  } catch (error) {
    console.log(error)
  }
}
