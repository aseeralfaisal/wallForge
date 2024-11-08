import { ChatInputCommandInteraction, Client, GatewayIntentBits, type CacheType } from 'discord.js';
import { generateReply, pokeReply, quoteReply } from '@replies';
import { TOKEN } from '@config';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', async () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const commands: { [key: string]: (interaction: ChatInputCommandInteraction<CacheType>) => void } = {
    "poke": pokeReply,
    "genwall": generateReply,
    "quote": quoteReply
  }
  const { commandName }: { commandName: string } = interaction;

  if (commands[commandName]) {
    commands[commandName](interaction);
  }

});

client.login(TOKEN);
