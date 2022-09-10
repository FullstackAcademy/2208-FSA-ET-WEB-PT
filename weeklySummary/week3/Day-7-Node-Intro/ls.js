const fs = require("fs");

module.exports = function () {
    const files = fs.readdirSync('./', 'utf8');
    process.stdout.write(files.join("\n"));

    // fs.readdir('./', 'utf8', (err, files) => {
    //     if (err) throw err;
    //     else {
    //         process.stdout.write(files.join("\n"))
    //     }
    // })
}