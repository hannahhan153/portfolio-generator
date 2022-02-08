// argv property of process is array that holds exactly what was typed in command line to capture data and use in app
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;
// slice is an array method that returns a brand-new array based on process.argv starting at third index and ending with final index

const generatePage = (name, github) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>
        
    <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};
console.log(name, github);
console.log(generatePage(name, github));

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
    // arrow function 
    profileDataArr.forEach(profileItem => 
        console.log(profileItem));
};

printProfileData(profileDataArgs); */