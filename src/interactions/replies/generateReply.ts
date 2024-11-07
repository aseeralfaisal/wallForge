import { ChatInputCommandInteraction, EmbedBuilder, type CacheType } from "discord.js";
import { BASE_URL } from "@config";
import { apiInstance } from "@apiInstance";


export async function generateReply(
  interaction: ChatInputCommandInteraction<CacheType>
) {
  const getString = (query: string) => interaction.options.getString(query);
  const query = getString("query");
  const range = getString("range") || 1;
  const URI = `${BASE_URL}/search?query=${query}&per_page=${range}`;

  try {
    const apiResponse = await apiInstance.get(URI);

    const photos = apiResponse.data.photos
      .map((photo: any) => {
        return { landscape: photo.src.landscape, alt: photo.alt };
      })
    if (!photos.length) return await interaction.reply("Images Unavailble");

    const embeds = photos.map(({ landscape, alt }: { landscape: string, alt: string }) => {
      return new EmbedBuilder()
        .setTitle(alt)
        .setImage(landscape)
    });

    await interaction.reply({ embeds });
  } catch (error) {
    console.error("Error ", error);
    await interaction.reply("Error occured");
  }
}
