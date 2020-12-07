const fs = require('fs');

function howManyPasswordsAreSecure(list) {

    var rawPasswordList = fs.readFileSync(list, 'utf8');
    var preppedPasswordList = rawPasswordList.split('\n')
    let answer = preppedPasswordList.length;

    for (let x = 0; x < preppedPasswordList.length; x++) {

        let rawChosen = preppedPasswordList[x]
        let chosenRulesAndPassword = rawChosen.split(':')

        let chosenRules = chosenRulesAndPassword[0];
        let chosenPassword = chosenRulesAndPassword[1]


        let chosenMinReq = chosenRules.split('-')[0]
        let arrangedSplit = chosenRules.split('-')[1]
        let chosenMaxReq = arrangedSplit.split(' ')[0]
        
        
        console.log('chosenMaxReq:', chosenMaxReq)

        let chosenLetter = chosenRules[chosenRules.length - 1]
    

        let chosenLettersInPassword = 0
        let preppedPassword = chosenPassword.split('')

        for (let y = 0; y < preppedPassword.length; y++) {
            console.log(chosenLetter)
            if (preppedPassword[y] === chosenLetter) {
                chosenLettersInPassword = chosenLettersInPassword + 1
            }   
        }
        if (chosenLettersInPassword > chosenMaxReq || chosenLettersInPassword < chosenMinReq) {
            console.log(`the min req on this is ${chosenMinReq}, the max req is ${chosenMaxReq}, and the # of the chosen letter in this password is ${chosenLettersInPassword}, so the answer is ${answer}`)
            answer = answer - 1;
        }

    }
    return answer;
}

console.log(howManyPasswordsAreSecure('./input'))