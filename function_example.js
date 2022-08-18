function getAvarage(assignment1, assignment2, assuignment3) {
    const total = assignment1 + assignment2 + assuignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 59;
const assuignment3Marks = 60;
var myAverage = getAvarage(assignment1Marks, assignment2Marks, assuignment3Marks);
console.log('my avg so far: ', myAverage.toFixed(2));