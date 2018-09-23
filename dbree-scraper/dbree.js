const fetch = require('node-fetch');
const cheerio = require('cheerio');
const GoogleSearch = require('google-searcher')

function getInfo(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(data => data.text())
        .then(data => {
            const $ = cheerio.load(data);
            const musicInfo = {
                art: $('.img--cover-art').attr('src'),
                name: $('.dd-song-name').html(),  
                artist: $('.dd-artist').html(),  
                album: $('.dd-album').html(),  
                year: $('.dd-year').html(),
                trackNo: $('.dd-track-number').html(),
                genre: $('.dd-genre').html(),                    
                bitrate: $('.dd-bit-rate').html(),                    
                size: $('.dd-size').html(),                   
                length: $('.dd-length').html(),                   
                sampleRate: $('.dd-sample-rate').html(),
                channels: $('.dd-channels').html()
            }
            resolve(musicInfo);
        })
        .catch(err => {
            console.log(Error(err));
            reject(Error(err));
        });
    })
}

function search(query) {
    return new Promise((resolve, reject) => {
        new GoogleSearch()
            .host('www.google.com')
            .lang('en')
            .query(`site:https://dbr.ee ${query}`)
            .exec()
            .then(results => {
                resolve({results});
            })
            .catch(err => {
                reject(Error(err));
            })
    })
}

module.exports = {
    getInfo,
    search
}