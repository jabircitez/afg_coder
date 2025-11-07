const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || '')
bot.start(ctx => ctx.reply('سلام! پشتیبانی AFG CODER — لطفاً سوالتان را بفرستید.'))
bot.on('text', async ctx => {
  // TODO: store ticket in DB and notify admin
  ctx.reply('پیام شما دریافت شد، تیم پشتیبانی به زودی پاسخ می‌دهد.')
})
bot.launch().then(()=> console.log('bot started'))
