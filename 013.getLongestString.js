function getLongestString(arrayOfStrings) {
    let result = "";
    
    for (let value of arrayOfStrings) {
        if (value.length>result.length) {
            result = value;
        }
    }
    
    return result;
}

export { getLongestString };