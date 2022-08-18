function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return 'Invalid Input'
    }
    else {
        const degree = radian * 57.2958;
        return degree.toFixed(2)
    }
}
console.log(radianToDegree('199'))