module.exports = {
    kod: "isim",
   async run (client, message, args) {
const Discord = require('discord.js')
const voxi = require('../_BOOT/config.json')
if (!message.member.roles.cache.has(voxi.kayıtsrm) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Hata: `Bu komutunu kullanabilmek için herhangi bir yetkiye sahip değilsin.`").then(x => x.delete({timeout: 10000}));
let voximember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
if(!voximember) return message.channel.send("Lütfen birini etiketleyiniz.")
let nick = args[1];
let age = args[2];
if(!nick) return message.channel.send("Lütfen bir isim belirleyiniz.")
if(!age) return message.channel.send("Lütfen bir yaş belirleyiniz.")
await voximember.setNickname(`${voxi.tag} ${nick.charAt(0).toUpperCase() + nick.slice(1).toLowerCase()}${age ? ` | ${age}` : ``}`).catch();
const embed = new Discord.MessageEmbed()
.setFooter(`${message.author.tag} Tarafından Kullanıldı! | Developed By Voxi ^^`)
.setColor("RANDOM")
.setDescription(`${voximember} adlı kullanıcının ismi ${voxi.tag} ${nick.charAt(0).toUpperCase() + nick.slice(1).toLowerCase()}${age ? ` | ${age}` : ``} olarak değiştirildi.`)
message.channel.send(embed)
   }
}