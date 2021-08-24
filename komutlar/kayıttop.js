module.exports = {
    kod: "topteyit",
   async run (client, message, args) {
       const Discord = require('discord.js')
const mongoose = require("mongoose");
const Register = require('../Semalar/Register.js');

exports.execute = async (client, message, args) => {



  let embed = new Discord.MessageEmbed().setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));
    
  let registerTop = await Register.find({ guildId: message.guild.id }).sort([["totalRegister", "descending"]]).exec();

  if(!registerTop.length) return message.channel.send(embed.setDescription(`Herhangi bir kayıt verisi bulunamadı!`))
  registerTop = registerTop.filter(x => message.guild.members.cache.has(x.userId)).splice(0, 10)
  message.channel.send(embed.setDescription(registerTop.map((x, i) => `\`${i+1}.\` <@${x.userId}> Toplam **${x.totalRegister}** teyit (**${x.manRegister}** Erkek, **${x.womanRegister}** Kız)`)))

};
   }
}
