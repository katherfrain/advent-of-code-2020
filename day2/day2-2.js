const fs = require('fs');

function prepareRules(list) {

    let preppedRulesList = [];

    for (let x = 0; x < list.length; x++) {

        let chosenRules = list[x].split(':')[0];

        let breakOffFirstIndexReq = chosenRules.split('-');
        let firstIndexReq = breakOffFirstIndexReq[0];

        let breakOffSecondIndexReq = breakOffFirstIndexReq[1].split(' ');
        let secondIndexReq = breakOffSecondIndexReq[0];

        let chosenLetter = breakOffSecondIndexReq[1];

        preppedRulesList.push([firstIndexReq, secondIndexReq, chosenLetter]);

    } return preppedRulesList
}
function preparePassword(list) {

    let preppedPasswordList = []
    for (let x = 0; x < list.length; x++) {
        //because this introduces a , in the 0 place, everything can proceed w/o accounting for the off-by-one error
        let chosenPassword = list[x].split(':')[1].split('');
        console.log(chosenPassword)
        preppedPasswordList.push(chosenPassword);
    }
    return preppedPasswordList;

}

function howManyPasswordsAreSecure(file) {

    var rawList = fs.readFileSync(file, 'utf8');
    var preppedList = rawList.split('\n');

    let preppedRules = prepareRules(preppedList);
    let preppedPassword = preparePassword(preppedList);

    let answer = 0;

    for (let x = 0; x < preppedList.length; x++) {

        let hasSingleRequired = false;
        let thisPassword = preppedPassword[x];

        let firstIndexReq = preppedRules[x][0]
        let secondIndexReq = preppedRules[x][1]
        let chosenLetter = preppedRules[x][2]

        if (thisPassword[firstIndexReq] === chosenLetter && thisPassword[secondIndexReq] != chosenLetter) {
                hasSingleRequired = true;
                answer = answer + 1
            }

        else if (thisPassword[secondIndexReq] === chosenLetter && thisPassword[firstIndexReq] != chosenLetter) {
                console.log(`${thisPassword} has ${chosenLetter} at ${secondIndexReq}, but not ${firstIndexReq}`)
                hasSingleRequired = true;
                answer = answer + 1
            }
        }
        
        return answer;
}



console.log(howManyPasswordsAreSecure('./input'))