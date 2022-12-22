import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  botMessage() {          
    process.env.NTBA_FIX_319 = "1";  
    const TelegramBot = require('node-telegram-bot-api');  
    
    const token = '5936200294:AAFqCuPu508ZSAmtTiT68tbubRZGOd5Oubo';  
    
    const bot = new TelegramBot(token, { polling: true });  

    bot.on('message', async (msg) => {  
      console.log(msg)
        if (msg.text.toString() !== null) {  
          if(msg.chat.type === "group" ){
            bot.sendMessage(1022226272, `${msg.text}`);  
          }else{
            // -804670816
            if(msg?.entities?.length > 0 && msg?.entities[0].type === 'phone_number' ){
              const id = await Number(msg.text.substring(4, 5 + msg.entities[0].length))
              const length = msg.text.substring((5 + msg.entities[0].length), (msg.text.length + 1));
              if(id){
                bot.sendMessage(id, length);  
              }
            }
          }
        }  
    })
}
}
