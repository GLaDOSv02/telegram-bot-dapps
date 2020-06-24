const TelegramBot = require('node-telegram-bot-api');
const schedule = require('node-schedule');
const { token, chatId } = require('./config');
// replace the value below with the Telegram token you receive from @BotFather
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// * * * * * *
// second minute hour day month dayOfWeek
const robotSchedules = ()=>{
    // update: The settlement robot calls this function daily to update the capital pool and settle the pending refund.
    schedule.scheduleJob('0 * * * * *', async () => {
        await bot.sendMessage(chatId, 'Hey there! I am wanchain dapp bot!');
    });
}

robotSchedules();


// // Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// // Listen for any kind of message. There are different kinds of
// // messages.
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });