//theoretically this should 
function setYear(){
    let thisDate = new Date; 
    let thisYear = thisDate.getFullYear(); 
    return thisYear;
}
setYear()

//yes, it may be an overly verbose function name, but I prefer to know exactly what my functions do
function checkIf2InputsSumToYear(fileinput){
    fetch(fileinput)
    .then(response => response.json())
    .then(data => {
        for(let x=0; x<data.length; x++){
            let pointA = data[x]
            for(let j=0; j<data.length; j++) {
                let pointB = data[j]
                if(pointA + pointB == setYear()) {
                    return pointA*pointB
                }
            }
        }
    })

}

console.log(checkIf2InputsSumToYear('/input'))
