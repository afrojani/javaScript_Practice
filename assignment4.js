// 1. convert radian to degree.
function radianToDegree(radian) {
    if (typeof radian !== 'number') {
        return 'Invalid Input'
    }
    else {
        const degree = radian * 57.2958;
        return degree.toFixed(2)
    }
}



// 2. check whether the given file name is a javascript file or not.
function isJavaScriptFile(filename) {
    if (typeof filename !== 'string') {
        return 'Invalid Input'
    }
    else {
        if (filename.endsWith('.js')) {
            return true;
        }
        else {
            return false;
        }
    }

}


// 3. calculate the total oil price that i have to pay.
function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    if (typeof dieselQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof octaneQuantity !== 'number') {
        return 'Invalid Input'
    }
    else {
        const dieselPirce = 114;
        const petrolPrice = 130;
        const octanePrice = 135;
        let totalDieselCost = dieselPirce * dieselQuantity;
        let totalPterolCost = petrolPrice * petrolQuantity;
        let totalOctaneCost = octanePrice * octaneQuantity;
        let totalCost = totalDieselCost + totalPterolCost + totalOctaneCost;
        return totalCost

    }

}


// 4. calculate the public bus fare.
function publicBusFare(people) {
    if (typeof people !== 'number') {
        return 'Invalid Input'
    }
    else {
        let busRemainder = people % 50
        if (busRemainder > 0) {
            let microBusRemainder = busRemainder % 11
            if (microBusRemainder > 0) {
                return microBusRemainder * 250
            } else {
                return 0
            }
        } else {
            return 0
        }
    }

}


// 5. find the best friends.
function isBestFriend(object1, object2) {
    if (typeof object1 !== 'object' || typeof object2 !== 'object') {
        return 'Invalid Input'
    }
    else {
        if (object1.name == object2.friend && object1.friend == object2.name) {
            return true
        }
        else {
            return false
        }

    }

}


// let object1 = { name: "abul", friend: "baabul" }
// let object2 = { name: "babul", friend: "abul" }

// console.log(isBestFriend(object1, object2))