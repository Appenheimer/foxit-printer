var child_process = require('child_process');
var wkhtml = require('node-wkhtml');

/**
 *
 * @param  {String}   pathToFile [description]
 * @param  {Function} cb         [description]
 * @return {[type]}              [description]
 */
module.exports.print = function(pathToFile, pathToFoxit, cb) {
    var command = '"' + pathToFoxit + '" /p ' + pathToFile;
    child_process.exec(command, cb);
}

module.exports.toPDF = function(pathToHtml, pathToWkhtmltopdf, outpath, cb) {
    var command = pathToWkhtmltopdf + ' ' + pathToHtml + ' ' + outpath;
    require('child_process').exec(command, cb);
};
