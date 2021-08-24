module.exports = {
    kod: "nerede",
   async run (client, message, args) {
    const Discord = require('discord.js')
    const voxi = require('../_BOOT/config.json')
    const mongoose = require('mongoose')
    const Register = require("../Semalar/Register.js");
    let voxiEmb = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({ dynamic: true }))
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(voxiEmb.setDescription(`**Bu komutu kullanmaya yetkin yetmiyor.**`)).then(x => x.delete({ timeout: 5000 }));
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.channel.send(voxiEmb.setDescription(`Bir kullanıcı belirtmelisin.`)).then(x => x.delete({ timeout: 5000 }));
    let voiceChannel = member.voice.channel
    if(!voiceChannel) return message.channel.send(voxiEmb.setDescription(`Belirttiğin kişi ses kanalında bulunmuyor.`)).then(x => x.delete({ timeout: 5000 }));
let microphone = member.voice.selfMute ? "Kapalı" : "Açık";
let headphones = member.voice.selfDeaf ? "Kapalı" : "Açık";
let sestekiler = message.guild.channels.cache.get(voiceChannel.id).members.map(x => `${x.user} - \`${x.user.id}\``).join("\n")

    message.channel.send(voxiEmb.setDescription(`
${member} kişisi <#${voiceChannel.id}> kanalında. **Mikrofonu ${microphone}**, **Kulaklığı ${headphones}**
`).setColor("RANDOM"))

   }
}