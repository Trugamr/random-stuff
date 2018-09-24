const dbree = require('./dbree');

// dbree.getInfo('https://dbr.ee/uOqf/ds')
//     .then(data => { console.log(data) })
//     .catch(err => { console.log(Error(err)) });

// m4a only
const types = ['MPEG-4 Audio'];


dbree.searchInfo('Starlight Jai', types)
    .then(data => {
        console.log(data);
    })
    .catch(err => { console.error(Error(err)) });