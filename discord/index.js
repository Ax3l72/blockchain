console.log("Run Bot");
require("dotenv").config();

const {
  REST
} = require("@discordjs/rest");
const {
  Routes
} = require("discord-api-types/v9");

const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const token = process.env.BOT_TOKEN;

const RequestRPC = require('./api-blockchain')

const commands = [{
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "block",
    description: "Blockchain getblockcount",
  },
  {
    name: "bl",
    description: "Blockchain getbalance",
  },
  {
    name: "info",
    description: "Get info blockchain",
  },
  {
    name: "help",
    description: "test",
  },

];

const rest = new REST({
  version: "9"
}).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    });
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

const {
  Client,
  Intents,
  MessageActionRow,
  MessageSelectMenu,
  MessageEmbed
} = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS]
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.deferReply();
    const reply = await interaction.editReply("Ping?");
    await interaction.editReply(`Pong!  La latence est de ${reply.createdTimestamp - interaction.createdTimestamp}ms. & La latence de l'API est de ${Math.round(client.ws.ping)}ms.`);

  }

  if (interaction.commandName === "block") {
    const r = new RequestRPC('getblockcount')
    r.GetBlockChain().then(data => {
      interaction.reply("__**Block count :**__ " + data.result);
    })
  }

  if (interaction.commandName === "bl") {
    const r = new RequestRPC('getbalance')
    r.GetBlockChain().then(data => {
      interaction.reply("__**Balance :**__ " + data.result);
    })
  }

  if (interaction.commandName === "info") {
    const r = new RequestRPC('getinfo')
    r.GetBlockChain().then(data => {
      interaction.reply(`__**Getinfo :**__ \nName: ${data.result.name}\nDifficulty: ${data.result.difficulty}\nBalance: ${data.result.balance}\nBlocks: ${data.result.blocks} \nLongest block: ${data.result.longestchain} \nConnections: ${data.result.connections}`);
    })
  }

  if (interaction.commandName === 'help') {
    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
        .setCustomId('selector')
        .setPlaceholder('Nothing selected')
        .addOptions([{
            label: 'getinfo',
            description: 'getinfo',
            value: 'getinfo',
          },
          {
            label: 'Get balance',
            description: 'balance',
            value: 'balance',
          },
        ]),
      );
    const msg = await interaction.reply({
      ephemeral: true,
      components: [row]
    });

  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isSelectMenu()) return

    if (interaction.customId === "selector") {

      let value = interaction.values

      if (value[0] === "getinfo") {
        const r = new RequestRPC('getinfo')
        r.GetBlockChain().then(data => {
          interaction.reply(`__**Getinfo :**__ \nName: ${data.result.name}\nDifficulty: ${data.result.difficulty}\nBalance: ${data.result.balance}\nBlocks: ${data.result.blocks} \nLongest block: ${data.result.longestchain} \nConnections: ${data.result.connections}`);
        })

      } else if (value[0] === "balance") {
        const r = new RequestRPC('getbalance')
        r.GetBlockChain().then(data => {
          interaction.reply("__**Balance :**__ " + data.result);
        })
      }

    }

    // if error
  } catch (e) {
    console.error(e)
    interaction.followUp({
      content: e.message,
      ephemeral: true
    })
  }

})

client.login(token);