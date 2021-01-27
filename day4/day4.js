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

function validateBYR(passportInput) {

}

function validPassports(file) {
    var arrayOfPassPortArrays = prepareFile(file);
    let passedPorts = [];

    for (let x = 0; x < arrayOfPassPortArrays.length; x++) {
        let thisPassport = arrayOfPassPortArrays[x];
        let passNum = 0;

        for (let j = 0; j < thisPassport.length; j++) {
            let thisPassportCategory = thisPassport[j].split(':')[0];
            let thisPassportValue = thisPassport[j].split(':')[1]

            if (thisPassportCategory === 'byr') {

                if (parseInt(thisPassportValue) >= 1920 && parseInt(thisPassportValue) <= 2020) {
                    passNum = passNum + 1;
                }
            }
            else if (thisPassportCategory === 'iyr') {
                if (parseInt(thisPassportValue) >= 2010 && parseInt(thisPassportValue) <= 2020) {
              
                    passNum = passNum + 1;

                }
            }
            else if (thisPassportCategory === 'eyr') {
                if (parseInt(thisPassportValue) >= 2020 && parseInt(thisPassportValue) <= 2030) {
                    passNum = passNum + 1;

                }
            }
            else if (thisPassportCategory === 'hgt') {

                let splitValue = thisPassportValue.split('');
                let clippedCMorINCH = splitValue.splice(-2,).join('');

                let height = thisPassportValue.slice(0, -2);


                if (clippedCMorINCH === 'in') {
                    if (height >= 59 && height <= 76) {
                        passNum = passNum + 1;
                    }
                }
                else if (clippedCMorINCH === 'cm') {
                    if (height >= 150 && height <= 193) {
                        passNum = passNum + 1;

                    }
                }
            }
            else if (thisPassportCategory === 'hcl') {
                if (thisPassportValue.match(/^\#[a-z0-9]{6}/)) {
                    passNum = passNum + 1;
                }
            }
            else if (thisPassportCategory === 'ecl') {
                if (thisPassportValue === 'amb' ||
                    thisPassportValue === 'blu' ||
                    thisPassportValue === 'brn' ||
                    thisPassportValue === 'gry' ||
                    thisPassportValue === 'grn' ||
                    thisPassportValue === 'hzl' ||
                    thisPassportValue === 'oth') {
                    passNum = passNum + 1

                }
            }
            else if (thisPassportCategory === 'pid') {
                if (thisPassportValue.match(/^[0-9]{9}/)) {
                    passNum = passNum + 1;
                }
            }
            if (passNum === 7) {
                passedPorts.push(thisPassport)
            }

        }
    }
    
    console.log(passedPorts)
    return passedPorts

}


validPassports('./input')