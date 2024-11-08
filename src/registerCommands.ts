import { REST, Routes } from 'discord.js';
import commands from '@commands';
import { CLIENT_ID, TOKEN } from '@config';

const rest = new REST({ version: '10' }).setToken(TOKEN);

try {
  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
  console.log('Reloaded application (/) commands');
} catch (error) {
  console.error(error);
}
