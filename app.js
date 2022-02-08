// allows the file to access the fs module's functions through the fs assignment
const fs = require('fs');
const generatePage = require('./src/page-template');
// argv property of process is array that holds exactly what was typed in command line to capture data and use in app
// slice is an array method that returns a brand-new array based on process.argv starting at third index and ending with final index
const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

// file name, data written in this case HTML string template, handle error and success message
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output.')
})

// arrow does not require function keyword
// implicit return means we don't have to use the return statement if we're performing one action
// const never reassigned, let can be reassigned; both are block-scope variables; the let variables are inside block and outside block are unaffected by each other
/* const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('================');

    // Is the same as this...
    // array method, we can't use if there is no array involved in the iterable functionality
    // when arrow function has one argument, parentheses are optional
    // when there are no arguments or more than one, parentheses are necessary
    profileDataArr.forEach(profileItem => 
        console.log(profileItem));
};

printProfileData(profileDataArgs); */