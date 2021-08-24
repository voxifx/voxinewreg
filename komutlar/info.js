module.exports = {
    kod: "me",
   async run (client, message, args) {
       const Discord = require('discord.js')
const mongoose = require("mongoose");
const Register = require('../Semalar/Register.js');
const moment = require('moment')
moment.locale('tr')
exports.execute = async (client, message, args) => {



  

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;



  let registerData = await Register.findOne({ guildId: message.guild.id, userId: user.id });
  let embed = new Discord.MessageEmbed().setAuthor(user.user.username, user.user.avatarURL({ dynamic: true }));
//        return message.channel.send(embed.addField(`❯ Kullanıcı Bilgisi`, `\`•\` Hesap: ${user} \n\`•\` Sunucu İsmi: ${user.displayName} \n\`•\` Kullanıcı ID: ${user.id}`).addField(`❯ Kayıt Bilgisi`, `\`•\` Toplam: ${x.totalRegister} \n\`•\` Erkek: ${x.manRegister} \n\`•\` Kız: ${x.womanRegister}`))

  if(!registerData) {
    let newRegisterData = new Register({
      _id: new mongoose.Types.ObjectId(),
      guildId: message.guild.id,
      userId: user.id,
      totalRegister: 0,
      womanRegister: 0,
      manRegister: 0,
      userNames: []
    }).save().then(x => {
        return  message.channel.send(new Discord.MessageEmbed()
        .setColor("BLACK")
        .addFields(
          { name: '<a:voxi_elmas:875018309177851954> Erkek Kayıt', value: `\`\`\`${x.manRegister}\`\`\``, inline: true },
          { name: '<a:voxi_elmas:875018309177851954> Kız Kayıt', value: `\`\`\`${x.womanRegister}\`\`\``, inline: true },
          { name: '<a:voxi_elmas:875018309177851954> Total Kayıt', value: `\`\`\`${x.totalRegister}\`\`\``, inline: true },
        
          { name: '<a:voxi_elmas:875018309177851954> Kullanıcı ID', value: `\`\`\`${user.id}\`\`\``, inline: true },
          { name: '<a:voxi_elmas:875018309177851954> Kullanıcı Tag', value: `\`\`\`${user.user.tag}\`\`\``, inline: true },
          { name: '<a:voxi_elmas:875018309177851954> Önceki İsimler', value: `\`\`\`${x.userNames.length}\`\`\``, inline: true },
        
        ))
    });
  }

  var kadın = registerData.womanRegister

 message.channel.send(new Discord.MessageEmbed()
.setColor("BLACK")
.addFields(
  { name: '<a:voxi_elmas:875018309177851954> Erkek Kayıt', value: `\`\`\`${registerData.manRegister}\`\`\``, inline: true },
  { name: '<a:voxi_elmas:875018309177851954> Kız Kayıt', value: `\`\`\`${kadın}\`\`\``, inline: true },
  { name: '<a:voxi_elmas:875018309177851954> Total Kayıt', value: `\`\`\`${registerData.totalRegister}\`\`\``, inline: true },

  { name: '<a:voxi_elmas:875018309177851954> Kullanıcı ID', value: `\`\`\`${user.id}\`\`\``, inline: true },
  { name: '<a:voxi_elmas:875018309177851954> Kullanıcı Tag', value: `\`\`\`${user.user.tag}\`\`\``, inline: true },
  { name: '<a:voxi_elmas:875018309177851954> Önceki İsimler', value: `\`\`\`${registerData.userNames.length}\`\`\``, inline: true },

))
    


};
   }
}

