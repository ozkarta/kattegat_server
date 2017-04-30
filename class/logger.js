let fs = require('fs');

let config = require('../config/app.config.js');

module.exports.errorLogger = function errorLoger(err, req, res, next) {

    let now = new Date();
    let fileName = config.errLogFile + '/error_' + now.getFullYear() + '_' + (now.getMonth() + 1) + '_' + now.getDate() + '.log';

    fs.open(fileName, 'a', (fileError, file) => {
        fs.write(file, now + '   ' + err.toString() + '   \n', () => {
            fs.close(file);
        });
    });
    return next(err);
}

