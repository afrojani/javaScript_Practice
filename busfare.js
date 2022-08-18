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


console.log(publicBusFare('15'))