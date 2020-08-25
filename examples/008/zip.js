const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const ZLIB_BETS_COMPRESSION = 9;

// create a file to stream archive data to
const zipPath = path.join(__dirname, 'file.zip');
const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', {
    zlib : {
        level : ZLIB_BETS_COMPRESSION
    }
});

archive.pipe(output);

const textPath = path.join(__dirname, 'copy.txt');
const logoPath = path.join(__dirname, 'logo.jpg');

archive.append(fs.createReadStream(textPath), {
    name : 'content.txt'
});
archive.append(fs.createReadStream(logoPath), {
    name : 'nobot.jpg'
});

archive.finalize();
// listen for all archive data to be written
output.on('close', () => {
    console.log(`Total bytes : ${archive.pointer()}`);
    console.log("Archiving has now finished");
});

// good practice to catch error explicitely
archive.on('error', (err) => {
    throw err;
});
