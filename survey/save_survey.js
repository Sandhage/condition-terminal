const fs = require('fs');

exports.save = function(survey) {
    // data manipulation goes here.
    write(survey);
}

function write(survey) {
    fs.writeFile('save.txt', survey, (err) => {
        if (err) {
            console.log('OOPS: ' + err);
        }

        console.log("Saved.");
    });
}

