function minNumber(numbers) {
    let minNum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        // console.log(i, element)
        if (element < minNum) {
            minNum = element;
        }
    }
    return minNum;
}
const myNumbers = [23, 20, 35, 17, 45, 18];
const myMinNumber = minNumber(myNumbers);
console.log(myMinNumber)