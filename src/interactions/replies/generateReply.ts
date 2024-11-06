import axios from "axios";
import { ChatInputCommandInteraction, EmbedBuilder, type CacheType } from "discord.js";
import { IMAGES_API_KEY } from "@config";

export async function generateReply(interaction: ChatInputCommandInteraction<CacheType>) {
  const query = interaction.options.getString("query");
  const range = interaction.options.getString("range") || 1;
  const URI = `https://api.pexels.com/v1/search?query=${query}&per_page=${range}`;

  try {
    const apiResponse = await axios.get(URI, {
      headers: { Authorization: IMAGES_API_KEY }
    });

    const photos = apiResponse.data.photos
      .map((photo: { src: { landscape: string } }) =>
        photo.src.landscape);

    if (photos.length === 0) {
      await interaction.reply("Images Unavailble");
      return;
    }

    const embeds = photos.map((photo: string, index: number) => {
      return new EmbedBuilder()
        .setTitle(`${index + 1}`)
        .setImage(photo)
    });

    await interaction.reply({ embeds });
  } catch (error) {
    console.error("Error ", error);
    await interaction.reply("Error fetching the image");
  }
}
