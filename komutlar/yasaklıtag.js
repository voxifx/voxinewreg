module.exports = {
    kod: "yasaklıtag",
   async run (client, message, args) {
    const qdb = require('quick.db')
    const Discord = require('discord.js')
const voxi = require('../_BOOT/config.json')
const mongoose = require('mongoose')
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Hata: `Bu komutunu kullanabilmek için herhangi bir yetkiye sahip değilsin.`").then(x => x.delete({timeout: 10000}));
    let voximember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
var tags = args.slice(0).join(" ");
if(!tags) return message.channel.send("Lütfen bir tag belirleyiniz.")
qdb.set(`ytag_${message.guild.id}`, tags)
      message.channel.send(`Yasaklı tag ${tags} olarak belirlendi`)
   }
}