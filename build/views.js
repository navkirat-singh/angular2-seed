var fs = require('fs');

function views() {
    fs.createReadStream('./src/index.html').pipe(fs.createWriteStream('./bin/index.html'));
}

views();