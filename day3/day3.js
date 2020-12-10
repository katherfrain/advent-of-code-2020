const fs = require('fs');

function prepField(file){
    let loadedFile = fs.readFileSync(file, 'utf8');
    let splitOnX = loadedFile.split('\n');
    let field = []
    for (let x = 0; x < splitOnX.length; x++) {
        let thisRow = splitOnX[x].split('');
        field.push(thisRow);
    }
    return field
}

function placeSkiier(field) {
    
    let thisField = prepField(field)
    let skiierXPosition = 0;
    let skiierResults = [];

    for(let x = 0; x < thisField.length; x++) {

        skiierXPosition = (x * 3) % thisField[x].length;
        //the modulo is the remainder, check the console log to see how it works here
        //works @ 0 position b/c 0* 3 = 0, works at 1 position b/c 1*3 = 3 % 3
    

        let skiierRow = thisField[x]
        let skiierPosition = skiierRow[skiierXPosition];
        console.log(`Row:${x}, Position: ${skiierPosition} at ${skiierXPosition}`)
        
        skiierResults.push(skiierPosition)
    }

    return skiierResults;

}

function countTrees(skiierResults) {
    let answer = 0;
    for(let x = 0; x < skiierResults.length; x++) {
        if(skiierResults[x] === '#') {
            answer = answer + 1 
        }
    }
    console.log(answer)
    return answer; 
}

countTrees(placeSkiier('./input'))