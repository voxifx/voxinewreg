const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client() // client tanımalamsı
const { readdirSync } = require('fs'); // tanımlamalar
const { join } = require('path'); // tanımlamalar
const voxi = require('./_BOOT/config.json')
const mongoose = require('mongoose')
const moment = require('moment');
const fs = require('fs');
require('moment-duration-format')
const data = require('quick.db')
client.commands= new Discord.Collection(); // komutları alıyoruz
const aliases = client.aliases = new Discord.Collection();

    
const prefix = voxi.prefix

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}

client.on("error", console.error);

client.on('ready', () => {
    client.user.setActivity(voxi.botdurum)
    console.log('[VOXİ] Bot Aktif.')
});

Date.prototype.toTurkishFormatDate = function (format) {
    let date = this,
    day = date.getDate(),
    weekDay = date.getDay(),
    month = date.getMonth(),
    year = date.getFullYear(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
    
    let monthNames = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");
    let dayNames = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");
    
    if (!format) {
   format = "dd MM yyyy | hh:ii:ss";
    };
    format = format.replace("mm", month.toString().padStart(2, "0"));
    format = format.replace("MM", monthNames[month]);
    //" Yattım Allah Kaldır Beni Nur İçinde Daldır Beni Can Bedenden Ayrılırken İmanımla Gönder Beni " gece patlamamak için 
// "Allahümme ente rabbi la ilahe illa ente aleyke tevekkeltü ve ente rabb'ül-arş'il-azim, maşallahü kane ve ma lem yeşe lem yekün ve la havle ve la kuvvete illa billah'il Aliyy'il Azim." Tam Koruma 
//اللهم احرص على ألا تنفجر جزمة الثأر وأحذية الغار الأخرى يا إلهي هذه الجزمة هي الأفضل إن شاء الله آمين.
    if (format.indexOf("yyyy") > -1) {
   format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
   format = format.replace("yy", year.toString().substr(2, 2));
    };
    
    format = format.replace("dd", day.toString().padStart(2, "0"));
    format = format.replace("DD", dayNames[weekDay]);
    //" Yattım Allah Kaldır Beni Nur İçinde Daldır Beni Can Bedenden Ayrılırken İmanımla Gönder Beni " gece patlamamak için 
// "Allahümme ente rabbi la ilahe illa ente aleyke tevekkeltü ve ente rabb'ül-arş'il-azim, maşallahü kane ve ma lem yeşe lem yekün ve la havle ve la kuvvete illa billah'il Aliyy'il Azim." Tam Koruma 
//اللهم احرص على ألا تنفجر جزمة الثأر وأحذية الغار الأخرى يا إلهي هذه الجزمة هي الأفضل إن شاء الله آمين.
    if (format.indexOf("HH") > -1) format = format.replace("HH", hours.toString().replace(/^(\d)$/, '0$1'));
    if (format.indexOf("hh") > -1) {
    if (hours > 24) hours -= 24;
    if (hours === 0) hours = 24;
    format = format.replace("hh", hours.toString().replace(/^(\d)$/, '0$1'));
    };
    if (format.indexOf("ii") > -1) format = format.replace("ii", minutes.toString().replace(/^(\d)$/, '0$1'));
    if (format.indexOf("ss") > -1) format = format.replace("ss", seconds.toString().replace(/^(\d)$/, '0$1'));
    return format;
    };
  
//" Yattım Allah Kaldır Beni Nur İçinde Daldır Beni Can Bedenden Ayrılırken İmanımla Gönder Beni " gece patlamamak için 
// "Allahümme ente rabbi la ilahe illa ente aleyke tevekkeltü ve ente rabb'ül-arş'il-azim, maşallahü kane ve ma lem yeşe lem yekün ve la havle ve la kuvvete illa billah'il Aliyy'il Azim." Tam Koruma 
//اللهم احرص على ألا تنفجر جزمة الثأر وأحذية الغار الأخرى يا إلهي هذه الجزمة هي الأفضل إن شاء الله آمين.
client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return message.channel.send(`Komut dosyamda **${command}** adlı bir komut bulamadım.`);


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})
//" Yattım Allah Kaldır Beni Nur İçinde Daldır Beni Can Bedenden Ayrılırken İmanımla Gönder Beni " gece patlamamak için 
// "Allahümme ente rabbi la ilahe illa ente aleyke tevekkeltü ve ente rabb'ül-arş'il-azim, maşallahü kane ve ma lem yeşe lem yekün ve la havle ve la kuvvete illa billah'il Aliyy'il Azim." Tam Koruma 
//اللهم احرص على ألا تنفجر جزمة الثأر وأحذية الغار الأخرى يا إلهي هذه الجزمة هي الأفضل إن شاء الله آمين.
client.on("guildMemberAdd", async (member) => {  
await member.roles.add(voxi.unregister)  
})

//bura hg mesja yeri cdeğiştir burayı mal kerem
//" Yattım Allah Kaldır Beni Nur İçinde Daldır Beni Can Bedenden Ayrılırken İmanımla Gönder Beni " gece patlamamak için 
// "Allahümme ente rabbi la ilahe illa ente aleyke tevekkeltü ve ente rabb'ül-arş'il-azim, maşallahü kane ve ma lem yeşe lem yekün ve la havle ve la kuvvete illa billah'il Aliyy'il Azim." Tam Koruma 
//اللهم احرص على ألا تنفجر جزمة الثأر وأحذية الغار الأخرى يا إلهي هذه الجزمة هي الأفضل إن شاء الله آمين.
client.on("guildMemberAdd", async (member) => {  
var ytags = data.fetch(`ytag_${member.guild.id}`)
    var controltag = member.user.username.includes(ytags)
    let guvenilirlik = Date.now()-member.user.createdTimestamp < 1000*60*60*24*7;
    member.setNickname(`${voxi.tag} İsim | Yaş`)
    let memberGün = moment(member.user.createdAt).format("DD");
  let memberTarih = moment(member.user.createdAt).format("YYYY HH:mm:ss");
  let memberAylar = moment(member.user.createdAt).format("MM").replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık");
  let üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "  ")
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(!guvenilirlik) {
    client.channels.cache.get(voxi.registerchat).send(`${voxi.tag} ${member} \`(${member.id})\` sunucumuza hoşgeldin! Seninle birlikte ${üyesayısı} kişi olduk!\n\n${voxi.tag} Hesabını açılış süresi ${memberGün} ${memberAylar} ${memberTarih}!\n\n${voxi.tag} yetkililerimiz seninle ilgilenecektir!\n\nTagımıza ulaşmak için herhangi bir kanala \`.tag\` yazman yeterli! \`(${voxi.tag} - ${voxi.etiketTag})\``)

    } else {
        member.roles.set([voxi.jailrol])
        client.channels.cache.get(voxi.registerchat).send(`${member} \`(${member.id})\` kişisi sunucuya katıldı. Fakat hesabı 7 gün içerisinde açıldığı için jaile atıldı!`)
        client.channels.cache.get(voxi.jailchat).send(`${member} \`(${member.id})\` sunucumuza hoşgeldin! Fakat hesabın 7 gün içerisinde açıldığı için jaile düştün. Yasaklı tagı sildikten sonra kayıt olmak için yetkililere ulaşabilirsin!`)
    }
})
//" Yattım Allah Kaldır Beni Nur İçinde Daldır Beni Can Bedenden Ayrılırken İmanımla Gönder Beni " gece patlamamak için 
// "Allahümme ente rabbi la ilahe illa ente aleyke tevekkeltü ve ente rabb'ül-arş'il-azim, maşallahü kane ve ma lem yeşe lem yekün ve la havle ve la kuvvete illa billah'il Aliyy'il Azim." Tam Koruma 
//اللهم احرص على ألا تنفجر جزمة الثأر وأحذية الغار الأخرى يا إلهي هذه الجزمة هي الأفضل إن شاء الله آمين.

mongoose.connect(``).then(console.log("[Voxi] Mongo bağlandı"))  
client.login(voxi.token)
//  client.channels.cache.get(voxi.registerchat).send(`${voxi.tag} ${member} \`(${member.id})\` sunucumuza hoşgeldin! Seninle birlikte ${üyesayısı} kişi olduk!\n\n${voxi.tag} Hesabını açılış süresi ${memberGün} ${memberAylar} ${memberTarih}!\n\n${voxi.tag} yetkililerimiz seninle ilgilenecektir!\n\nTagımıza ulaşmak için herhangi bir kanala \`.tag\` yazman yeterli! \`(${voxi.tag} - ${voxi.etiketTag})\``)