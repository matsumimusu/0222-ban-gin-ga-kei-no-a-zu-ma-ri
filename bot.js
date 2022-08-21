const {Client} = require('discord.js') ;
const client = new Client ;
const key = ('MTAxMDc3MDE0NTE1MDUxNzI3OA.GoifJT.mXLD40m1nSKORM8fAcb77RE0ZwoAxBP3Ocgkbg')
const preifx = require('./preifx.json') ;
//token
client.login(key)
//client.login(process.env.DISCORD_TOKEN_222);
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