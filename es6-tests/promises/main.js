const searchResults = [
    { id: 001, name: 'Eastside' },
    { id: 002, name: 'Happier' },
    { id: 003, name: 'Starlight' },
    { id: 004, name: 'Seasons' }
]

const artists = [
    { id: 001, artist: 'Khalid' },
    { id: 002, artist: 'Marshmello' },
    { id: 003, artist: 'Jai Wolf' },
    { id: 004, artist: 'Harley Bird' }
]

function searchById(id) {
    return new Promise((resolve, reject) => {
        // mimic request time
        setTimeout(() => {
            const results = searchResults.find(result => result.id === id);
            if(results) {
                resolve(results); 
            } else {
                reject(Error('id not found'));
            }
        }, 1000);
    })
}

function getArtistBySong(song) {
    return new Promise((resolve, reject) => {
        // mimic request time
        setTimeout(() => {
            let artist = artists.find(artist => artist.id == song.id);
            if(artist) {
                resolve(artist);
            } else {
                reject("artist not found");
            }
        }, 1000)
    })
}

searchById(003)
    .then(song => {
        console.log(song);
        return getArtistBySong(song);
    })
    .then(artist => {
        console.log(artist);
    })
    .catch(err => {
        console.error(err);
    })