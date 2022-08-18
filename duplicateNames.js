const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'babul', 'ebul', 'fabul', 'kabul', 'abul', 'cabul'];
function removeDuplicates(names) {
    let uniqueName = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (uniqueName.includes(name) === false) {
            uniqueName.push(name)
        }
    }
    return uniqueName

}
const uniqueNames = removeDuplicates(names);
console.log(removeDuplicates(names))