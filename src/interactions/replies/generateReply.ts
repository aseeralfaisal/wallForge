import { ChatInputCommandInteraction, EmbedBuilder, type CacheType } from "discord.js";
import { BASE_URL } from "@config";
import { apiInstance } from "@apiInstance";

export async function generateReply(
  interaction: ChatInputCommandInteraction<CacheType>
) {
  const query = interaction.options.getString("query");
  const range = interaction.options.getString("range") || 1;
  const URI = `${BASE_URL}/search?query=${query}&per_page=${range}`;

  try {
    const apiResponse = await apiInstance.get(URI);

    const photos = apiResponse.data.photos
      .map((photo: { src: { landscape: string } }) =>
        photo.src.landscape);

    if (!photos.length) return await interaction.reply("Images Unavailble");

    const embeds = photos.map((photo: string, index: number) =>
      new EmbedBuilder()
        .setTitle(`${index + 1}`)
        .setImage(photo)
    );

    await interaction.reply({ embeds });
  } catch (error) {
    console.error("Error ", error);
    await interaction.reply("Error fetching the image");
  }
}
