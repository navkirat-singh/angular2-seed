var fs = require('fs');
var path = require('path');

var dependencies = [
    './node_modules/systemjs/dist/system.js',
    'system.config.js'
]

function copyDependencies() {
    for (var i = 0; i < dependencies.length; i++) {
        var file = dependencies[i];
        fs.createReadStream(file).pipe(fs.createWriteStream(path.join('./bin', path.basename(file))));
    }
}

copyDependencies();