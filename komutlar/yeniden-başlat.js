const Discord = require('discord.js')
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    slash: true,                                
    cooldown: 5,                              

    data: new SlashCommandBuilder()         
    .setName('yeniden-başlat')
    .setDescription('Bot sahibi özel komutu.')
    .setDMPermission(false),
              
    async execute(client, interaction) {   
      
      const YetkiYok = new EmbedBuilder()
      .setDescription(`<:Carpi:1046504575277998130> Bu komutu kullanabilmek için **Bot sahibi** olmalısın.`)
      .setColor('Red')
      .setTitle("Hata")
        
      if(interaction.user.id !== "1146450370218950666" && interaction.user.id !== "1148225315034906644" && interaction.user.id !== "1148225316402245632"  && interaction.user.id !== "1029431477219360869" && interaction.user.id !== "1059475189588570122"){
      return interaction.reply({embeds: [YetkiYok]});
}
    
      const Başlatıldı = new EmbedBuilder()
         .setDescription(`<:Tik:1046504590775947274> **Bot yeniden başlatılıyor.**`)
         .setColor('Green')
         .setTitle('Başarılı')
         
      interaction.reply({embeds: [Başlatıldı]})
        
      setTimeout(() => {
      console.log(`Bot Yeniden Başlatılıyor`);
      process.exit(0);
      }, 2000) 
     
   }
}