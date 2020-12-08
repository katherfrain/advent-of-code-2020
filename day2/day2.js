const fs = require('fs');


function prepareRules(list) {

    let preppedRulesList = [];

    for (let x = 0; x < list.length; x++) {

        let chosenRules = list[x].split(':')[0];

        let breakOffMinReq = chosenRules.split('-');
        let minReq = breakOffMinReq[0];

        let breakOffMaxReq = breakOffMinReq[1].split(' ');
        let maxReq = breakOffMaxReq[0];

        let chosenLetter = breakOffMaxReq[1];

        preppedRulesList.push([minReq, maxReq, chosenLetter]);

    } return preppedRulesList
}
function preparePassword(list) {

    let preppedPasswordList = []
    for (let x = 0; x < list.length; x++) {
        let chosenPassword = list[x].split(':')[1].split('');
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

        let requiredLettersinPassword = 0;
        let thisPassword = preppedPassword[x];

        let minReq = preppedRules[x][0]
        let maxReq = preppedRules[x][1]
        let chosenLetter = preppedRules[x][2]

        for (let y = 0; y < thisPassword.length; y++) {
            if (thisPassword[y] === chosenLetter) {     
                requiredLettersinPassword = requiredLettersinPassword + 1
            }
        }
        if (requiredLettersinPassword >= minReq && requiredLettersinPassword <= maxReq) {
                answer = answer + 1
        }            
    }
    return answer;
}

console.log(howManyPasswordsAreSecure('./input'))