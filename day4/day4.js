const fs = require('fs')

function prepareFile(file) {
    let loadedFile = fs.readFileSync(file, 'utf8');
    let preppedFile = loadedFile.split(/\n{2,}/g);
        //with regex do curly brackets to indicate number of chars to count for 
        //add the g to look in the global file [reason unclear]

    let fullyPreppedFile = preppedFile.map(passport => {
        return passport.split(/\s+/g)
    })
    return fullyPreppedFile; 
}


function validPassports(file) {
    let arrayOfPassPortArrays = prepareFile(file);
    for(let x = 0; x < arrayOfPassPortArrays.length; x++) {
        console.log(x)
        let splitOnColon = arrayOfPassPortArrays[x].split(':');
        for(let y = 0; y < splitOnColon.length; y++) {
        if(splitOnColon[0].includes(/(byr)/) 
        && arrayOfPassPortArrays[x].includes('iyr')) {
            console.log('dude')
        }
        }

    }
}

console.log(validPassports('./input'))
