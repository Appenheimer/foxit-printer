var child_process = require('child_process');

/**
 *
 * @param  {String}   pathToFile [description]
 * @param  {Function} cb         [description]
 * @return {[type]}              [description]
 */
module.exports.print = function(pathToFile, pathToFoxit, printerName, cb) {
    var command = '"' + pathToFoxit + '" /t '+ '"' + pathToFile +'" ' + printerName;
    // console.log('Foxit command: '+command);
    child_process.exec(command, cb);
}

module.exports.toPDF = function(pathToHtml, pathToWkhtmltopdf, outpath, cb) {
    var command = pathToWkhtmltopdf + ' ' + pathToHtml + ' ' + outpath;
    require('child_process').exec(command, cb);
};
