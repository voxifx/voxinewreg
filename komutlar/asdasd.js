module.exports = {
    kod: "qweqwek",
   async run (client, message, args) {
    var tags = args.slice(0).join(" ");
message.channel.send(`yasaklı tag ${tags}`)
   }
}