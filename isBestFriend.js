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

let object1 = { name: "abul", friend: "babul" }
let object2 = { name: "babul", friend: "abul" }

console.log(isBestFriend(object1, object2))