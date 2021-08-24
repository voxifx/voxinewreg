module.exports = {
    kod: "tagtara",
   async run (client, message, args) {
const Discord = require('discord.js')
const voxi = require('../_BOOT/config.json')
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Hata: Bunu kullanabilmek için yetkin yok.")
var tag = voxi.tag
var etiket = message.guild.members.cache.filter(voxi => !voxi.bot).filter(member => member.user.discriminator == voxi.etiketTag).size
var ekipRol = voxi.tagrol
let taglilar = message.guild.members.cache.filter(s => s.user.username.includes(tag) && !s.roles.cache.has(ekipRol))
let etiketliler = message.guild.members.cache.filter(s => s.user.discriminator.includes(etiket)  && !s.roles.cache.has(ekipRol))
taglilar.array().forEach(async(member, index) => {
setTimeout(async() => {
await member.roles.add(ekipRol)
}, index * 1000)
})
etiketliler.array().forEach(async(member, index) => {
setTimeout(async() => {
await member.roles.add(ekipRol)
}, index * 1000)
})
var toplam = taglilar + etiketliler
message.channel.send(new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`Tag Kontrolü Başladı. Tagımız ${voxi.tag}`)
.setFooter(`${message.author.tag} Tarafından Kullanıldı! | Developed By Voxi ^^`)
)
   }
}