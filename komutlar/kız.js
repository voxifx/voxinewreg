module.exports = {
    kod: "k",
   async run (client, message, args) {
const Discord = require('discord.js')
const voxi = require('../_BOOT/config.json')
const mongoose = require('mongoose')
const Register = require("../Semalar/Register.js");

let voximember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
if (!message.member.roles.cache.has(voxi.kayıtsrm) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Hata: `Bu komutunu kullanabilmek için herhangi bir yetkiye sahip değilsin.`").then(x => x.delete({timeout: 10000}));
let registerData = await Register.findOne({ guildId: message.guild.id, userId: voximember.id });
let staffData = await Register.findOne({ guildId: message.guild.id, userId: message.author.id });
if(!voximember) return message.channel.send("Hata: Lütfen bir kullanıcı belirleyiniz @voxi/ID")
let nick = args[1];
let age = args[2];
if(!nick) return message.channel.send("Hata: Lütfen bir isim belirleyiniz.")
if(!age) return message.channel.send("Hata: Lütfen bir yaş belirleyiniz.")
var erkekrol = voxi.kız
var family = voxi.tagrol
var unregrol = voxi.unregister
await voximember.roles.add(erkekrol)
await voximember.roles.remove(unregrol)
await voximember.setNickname(`${voxi.tag} ${nick.charAt(0).toUpperCase() + nick.slice(1).toLowerCase()}${age ? ` | ${age}` : ``}`).catch();
var chat = voxi.chatId
client.channels.cache.get(chat).send(`${voximember} adlı kişi sunucumuza giriş yaptı hoşgeldiniz.`).then(x => x.delete({timeout: 10000}));
if(!staffData) {
    let newStaffData = new Register({
      _id: new mongoose.Types.ObjectId(),
      guildId: message.guild.id,
      userId: message.author.id,
      totalRegister: 1,
      womanRegister: 1,
      manRegister: 0,
      userNames: []
    }).save(); 
  } else {
    staffData.totalRegister++
    staffData.manRegister++
    staffData.save();
  }
  
  if(!registerData) {
    let newRegisterData = new Register({
      _id: new mongoose.Types.ObjectId(),
      guildId: message.guild.id,
      userId: voximember.id,
      totalRegister: 0,
      womanRegister: 0,
      manRegister: 0,
      userNames: [{ nick: `${voxi.tag} ${nick.charAt(0).toUpperCase() + nick.slice(1).toLowerCase()} `, type: `İsim Değiştirme`}]
    }).save();
  } else {
    registerData.userNames.push({ nick: `${voxi.tag} ${nick.charAt(0).toUpperCase() + nick.slice(1).toLowerCase()} `, type: `İsim Değiştirme`})
    registerData.save();
  }  
  message.react(voxi.tikemojiid)    
 } 
}