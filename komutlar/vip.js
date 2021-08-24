module.exports = {
    kod: "vip",
   async run (client, message, args) {
const Discord = require('discord.js')
const voxi = require('../_BOOT/config.json')
const mongoose = require('mongoose')
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Hata: Bunu kullanabilmek için yetkin yok.")
let voximember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
if(!voximember) return message.channel.send("Lütfen birini etiketleyiniz.")

message.channel.send(`${voximember.tag} adlı kişiye vip rolü verilmiştir.`)
await voximember.roles.add(voxi.viprol)
   }
}