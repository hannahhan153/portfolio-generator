const { writeFile, copyFile } = require('./utils/generate-site.js');
const writeFile = fileContent => {
    // new is a promise object that acts like a container that allows us to run code which at some point will be in a status of pending which means the code has begun to run but waiting for a response
    // resolve function when code executes successfully and reject function when code fails to execute
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's .catch() method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the .then() method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
};

// shorthand property names for both property name and its value
module.exports = { writeFile, copyFile };