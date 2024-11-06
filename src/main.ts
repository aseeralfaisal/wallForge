import { ChatInputCommandInteraction, Client, GatewayIntentBits, type CacheType } from 'discord.js';
import { generateReply, pokeReply } from '@replies';
import { TOKEN } from '@config';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const commands: { [key: string]: (interaction: ChatInputCommandInteraction<CacheType>) => void } = {
    "poke": pokeReply,
    "generate": generateReply
  }
  const { commandName }: { commandName: string } = interaction;

  if (commands[commandName]) {
    commands[commandName](interaction);
  }

});

client.login(TOKEN);
