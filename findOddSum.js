let sum = 0;

function getTheSumOf(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            let oddNum = element;
            sum = sum + oddNum;
        }

        console.log(index, element, sum)
    }

}
let myNumbers = [29, 34, 36, 15, 37, 74, 93];
getTheSumOf(myNumbers);