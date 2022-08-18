function isJavaScriptFile(filename) {
    let words = filename.split('.');
    const lastItem = words[words.length - 1]
    // console.log(lastItem)
    if (lastItem == "js") {
        return true
    } else {
        return false
    }
}

console.log(isJavaScriptFile("ani.js"))