import fs from 'fs';

function readFileWithCallback(callback) {
    fs.readFile('poem.txt', 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }

        callback(null, data);
    });
}

readFileWithCallback((err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    console.log('Contents of the poem:');
    console.log(data);
});

