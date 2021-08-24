module.exports = {
    kod: "yasaklıtags",
   async run (client, message, args) {
    const Discord = require('discord.js')
const voxi = require('../_BOOT/config.json')
const mongoose = require('mongoose')
const data = require('quick.db')
var ytags = data.fetch(`ytag_${message.guild.id}`)
let voximember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Hata: `Bu komutunu kullanabilmek için herhangi bir yetkiye sahip değilsin.`").then(x => x.delete({timeout: 10000}));
//VOXİİ EZZZZ
if(!ytags.length) return message.channel.send(`Herhangi bir yasaklı tag verisi bulunamadı!`)
message.channel.send(`Yasaklı taglar; ${ytags}`)

   }
}