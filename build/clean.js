var fs = require('fs');
var path = require('path');

function clean() {
    var dir = "./bin";
    if (fs.existsSync(dir)) {
        fs.readdir(dir, function(err, files) {
            if (err) {
                console.error("Clean Error : " + err);
                return;
            }
            for (var i = 0; i < files.length; i++) {
                fs.unlink(path.join(dir, files[i]), function(err) {
                    if (err) {
                        console.error('Error deleting file : ' + err);
                    }
                });
            }
        });
    }
}

clean();