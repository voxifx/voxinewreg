const Discord = require('discord.js');
const voxi = require('../_BOOT/config.json')

module.exports = {
    kod: "ysay",
   async run (client, message, args) {
    if(!message.member.hasPermission('ADMINISTRATOR')) {
       message.channel.send("Hata: `Bu komutunu kullanabilmek için herhangi bir yetkiye sahip değilsin.`").then(x => x.delete({timeout: 10000}));
    return }
    let embed = new Discord.MessageEmbed().setColor('RANDOM')

    let sesdedeğil = message.guild.members.cache.filter(x => x.roles.cache.has(voxi.kayıtsrm)).filter(y => !y.voice.channel&& y.presence.status!="offline")
message.channel.send(embed.setDescription(`
Aktif olup seste olmayan yetkililer aşağıda belirtimiştir dm atmak için \`.yetkilidm\` yazmanız yeterli\n────────────────────────────────────────────────\n
${sesdedeğil.map(s => `${s} <@!${s.user.id}>`).join(' , ')}`))
  
    } 
}
