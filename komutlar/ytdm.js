const Discord = require('discord.js');
const voxi = require('../_BOOT/config.json')

module.exports = {
    kod: "yetkilidm",
   async run (client, message, args) {

    let kullanıcı = message.guild.members.cache.filter(s => s.roles.cache.has(voxi.kayıtsrm)).filter(s => !s.voice.channel).size
    for(var i = 0;i < kullanıcı;i++){
      let a = message.guild.members.cache.filter(s => s.roles.cache.has(voxi.kayıtsrm)).filter(s => !s.voice.channel).map(a => a)[i]
      const userDM = await a.createDM()
    try {
      await userDM.send("Selam yetkili olarak bulunduğun sunucuda seste değilsin.Müsaitsen public odalara değilsen alone odalarına geçiş yapabilirsin.")
    } catch {
      await message.channel.send(`<@${a.user.id}> Selam yetkili olarak bulunduğun sunucuda seste değilsin.Müsaitsen public odalara değilsen alone odalarına geçiş yapabilirsin.`)
    }
    }
      
    } 

   }
