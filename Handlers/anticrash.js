const { WebhookClient, EmbedBuilder } = require("discord.js");
 
module.exports = (client) => {
  process.removeAllListeners();
 
  const webhook = new WebhookClient({ url: 'https://discord.com/api/webhooks/1122164820519690300/T8cbYTrZEvwV3jjz-Yt4jt3Vo0AIGh9wVXUDNR3BHOTkAeKTD3kHkNyetfYG_xV-0dBD' });
 
  const embed = new EmbedBuilder()
  .setColor(`Red`)
  .setAuthor({ name: `❎ An Error Occured` })
 
  process.on("unhandledRejection", (reason, p) => {
 
    let reasonString = reason instanceof Error ? reason.stack : String(reason);
 
    webhook.send({
      username: 'Error!',
      avatarURL: '',
      embeds: [embed.setDescription(`${reasonString}`)],
    });
 
    console.error(reason, p);
  });
 
  process.on("uncaughtException", (err, origin) => {
    let errString = err instanceof Error ? err.stack : String(err);
 
    webhook.send({
      username: 'Error!',
      avatarURL: '',
      embeds: [embed.setDescription(`${errString}`)],
    });
 
    console.error(err, origin);
  });
 
  process.on("uncaughtExceptionMonitor", (err, origin) => {
    let errString = err instanceof Error ? err.stack : String(err);
 
    webhook.send({
      username: 'Error!',
      avatarURL: '',
      embeds: [embed.setDescription(`${errString}`)],
    });
 
    console.error(err, origin);
  });
 
  process.on("multipleResolves", () => {});

  console.log('Anti-Crash loaded.')
 
};