const crypto = require('crypto');
const fs = require('fs');

const hash = crypto.createHash('sha256');

module.exports = function hashFile(filename) {
    const input = fs.createReadStream(filename);
    return new Promise((success,fail) => {
        input.on('readable', () => {

            const data = input.read();

            if (data) hash.update(data);
            else success(hash.digest('hex'));

        }).once ("error",fail);
    });
}
