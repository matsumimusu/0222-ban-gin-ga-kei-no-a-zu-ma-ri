const {Client} = require('discord.js') ;
const client = new Client ;
//const key = require('./key.json')
const preifx = require('./preifx.json') ;
//token
//client.login(key[222])
client.login(process.env.DISCORD_TOKEN_222);

//身份組
client.on('messageReactionAdd', async (reaction, user) => {
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === "969877193146634271")
        switch (reaction.emoji.name) {
            case "🆓":
                member.roles.add("965668031114129438");
                break;
        }});
client.on('messageReactionRemove', (reaction, user) => {
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === '969877193146634271') {
        switch (reaction.emoji.name) {
            case '🆓':
                member.roles.remove('965668031114129438')
                break;
        }}});




client.on('ready',()=>{
    console.log(`${client.user.tag}安ニャーsay yooo~~~`) ;
}) ;
client.on('message',msg=>{
    if(msg.content === (`222`)){
        msg.channel.send(`**USER : **${msg.author}我在喔`)
    } ;
    if(msg.content === (preifx.image)){
        msg.channel.send(`圖片系統(施工中)`)
    } ;
    if(msg.content === (preifx.joke)){
        msg.channel.send(`笑話系統(施工中)`)
    } ;
    if(msg.content === (preifx.level)){
        msg.channel.send(`伺服器經驗系統(施工中)`)
    } ;
    if(msg.content === (preifx.muisic)){
        msg.channel.send(`音樂系統(施工中)`)
    } ;
    if(msg.content === (preifx.tool)){
        msg.channel.send(`小工具系統(施工中)`)
    } ;
})