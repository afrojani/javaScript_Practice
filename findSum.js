let sum = 0;

function getTheSumOf(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element

        console.log(index, element, sum)
    }

}
let myNumbers = [29, 34, 36, 15, 37, 74, 93];
getTheSumOf(myNumbers);