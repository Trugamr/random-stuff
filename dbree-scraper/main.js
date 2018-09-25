const dbree = require('./dbree');
const telegraf = require('telegraf');

const bot = new telegraf('636599139:AAElV7uBEYw2t6MLKCjp2oKQS1SVGpuGMhI');

// const types = ['MPEG-4 Audio', 'MPEG Audio', 'MP3 Audio', 'FLAC Audio'];
const types = ['MPEG-4 Audio'];

bot.start(ctx => { ctx.reply('Sup...') });
bot.command('ping', ctx => { ctx.reply('pong :/')});
bot.on('inline_query', ctx => {
    console.log(ctx.from.username, ctx.inlineQuery.query);
    dbree.searchInfo(ctx.inlineQuery.query, types)
    .then(data => data.map(music => (
        {
            type: 'article',
            id: music.url.split('/')[3].substr(0,4),
            title: music.name,
            input_message_content: { message_text: music.url },
            url: 'https://dbr.ee/VZpl',
            hide_url: true,
            description: `by ${music.artist} (${music.year})`,
            thumb_url: music.art
        }
    )))
    .then(result => {
        ctx.answerInlineQuery(result);
        console.log(result);
    })
    .catch(err => { console.error(Error(err)) });    
})
bot.startPolling();
console.log('Polling...');








// dbree.searchInfo('This feeling chainsmokers', types)
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => { console.error(Error(err)) });