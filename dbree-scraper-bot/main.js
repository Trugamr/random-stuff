const dbree = require('./dbree');
const telegraf = require('telegraf');

const bot = new telegraf(process.env.TG_BOT_KEY);

const types = ['MPEG-4 Audio', 'MPEG Audio', 'MP3 Audio', 'FLAC Audio'];


bot.start(ctx => { ctx.reply('Sup...') });
bot.command('ping', ctx => { ctx.reply('pong :/')});
bot.on('inline_query', ctx => {
    console.log(ctx.from.username, ":", ctx.inlineQuery.query);
    dbree.searchInfo(ctx.inlineQuery.query, types)
    .then(data => data.filter(music => music.name != 'NA'))
    .then(data => data.map((music, index) => (
        {
            type: 'article',
            id: index,
            title: music.name,
            input_message_content: { message_text: music.url },
            url: music.url,
            hide_url: true,
            description: `by ${music.artist} (${music.year}) | ${music.size} (${music.bitrate}kbps)`,
            thumb_url: music.art
        }
    )))
    .then(result => {
        console.log(result);
        ctx.answerInlineQuery(result)
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