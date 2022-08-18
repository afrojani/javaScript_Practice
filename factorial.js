function factorialOfNumber(number) {
    let total = 1;
    for (let i = number; i >= 1; i--) {
        total = total * i;
        console.log(i, total)
    }
}
factorialOfNumber(5)