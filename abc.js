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
console.log(isJavaScriptFile(0))