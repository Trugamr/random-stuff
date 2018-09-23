const dbree = require('./dbree');

// dbree.getInfo('https://dbr.ee/uOqf/ds')
//     .then(data => { console.log(data) })
//     .catch(err => { console.log(Error(err)) });

dbree.search('Chainsmokers')
    .then(data => {
        data.results.forEach(result => {
            dbree.getInfo(result)
                .then(data => {
                    console.log(data);
                })
                .catch(err => {
                    console.error(Error(err));
                })
        });
    })
    .catch(err => {
        console.error(Error(err));
    })