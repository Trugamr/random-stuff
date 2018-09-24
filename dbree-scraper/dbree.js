const fetch = require('node-fetch');
const cheerio = require('cheerio');
const GoogleSearch = require('google-searcher');

const types = ['MPEG-4 Audio', 'MPEG Audio', 'MP3 Audio', 'FLAC Audio'];

// get info for single dbree link
function getInfo(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(data => data.text())
        .then(data => {
            const $ = cheerio.load(data);
            const musicInfo = {
                url,
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
                type: $('.dd-type').html(),
                channels: $('.dd-channels').html()
            }
            const type = $('.dd-type').html();
            resolve(musicInfo);
        })
        .catch(err => {
            console.log(Error(err));
            reject(Error(err));
        });
    })
}

// search and get array of dbree links
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


// search and get array of scraped info objects
function searchInfo(query, formats = types) {
    return new Promise((resolve, reject) => {
        search(query)
            .then(data => data.results)
            .then(data => data.map(url => {
                return getInfo(url)
            }))
            .then(promises=> { 
                Promise.all(promises)
                    .then(data => data.filter(item => formats.includes(item.type) ))
                    .then(data => {
                        resolve(data);
                    })
             })
             .catch(err => {
                 reject(Error(err));
             })
    });
}

module.exports = {
    getInfo,
    search,
    searchInfo
}