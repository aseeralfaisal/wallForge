import { ChatInputCommandInteraction, EmbedBuilder, type CacheType } from "discord.js";
import { apiInstance } from "../../interceptors/apiWallInstance.js";

const generatePhotos = async (query: string, range: string) => {
  const URI = `/search?query=${query}&per_page=${range}`;
  const apiResponse = await apiInstance.get(URI);

  const photos = apiResponse.data.photos
    .map((photo: { src: { landscape: string }, alt: string }) => {
      return { landscape: photo.src.landscape, alt: photo.alt };
    });
  return photos;
}

export async function generateReply(
  interaction: ChatInputCommandInteraction<CacheType>
) {
  const getString = (query: string) => interaction.options.getString(query);
  const query = getString("query") || "";
  const range = getString("range") || "1";

  try {
    const photos = await generatePhotos(query, range);
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
