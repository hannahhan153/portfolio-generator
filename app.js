// argv property of process is array that holds exactly what was typed in command line to capture data and use in app
const profileDataArgs = process.argv.slice(2, process.argv.length);
// slice is an array method that returns a brand-new array based on process.argv starting at third index and ending with final index
console.log(profileDataArgs);


const generatePage = (userName, githubName) => {
    return `
        Name: ${userName}
        Github: ${githubName}
    `;
};
console.log(generatePage('Hannah', 'hannahhan153'));

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