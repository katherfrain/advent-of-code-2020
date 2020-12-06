const fs = require('fs')

function setYear(){
    let thisDate = new Date; 
    let thisYear = thisDate.getFullYear(); 
    return thisYear;
}
setYear()

//yes, it may be an overly verbose function name, but I prefer to know exactly what my functions do
 function checkIf3InputsSumToYear(fileinput) {

    var rawFileInput = fs.readFileSync(fileinput, 'utf8');
    var preppedFileList = rawFileInput.split('\n');

    for (let x = 0; x < preppedFileList.length; x++) {
        for (let j = 0; j < preppedFileList.length; j++) {
            for(let y=0; y<preppedFileList.length; y++) {
       
            let pointA = parseInt(preppedFileList[x])
            let pointB = parseInt(preppedFileList[j])
            let pointC = parseInt(preppedFileList[y])
   
       
            if (pointA + pointB + pointC == setYear()) {
                return pointA * pointB
            }
        }
        }
    }
}
console.log(checkIf3InputsSumToYear('./input'))