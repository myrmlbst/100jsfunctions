function areValuesUnique(numbers) {
    const numbersFound = new Set();

    for (let number of numbers) {
        if (numbersFound.has(number)) {
            return false;
        }
      
        numbersFound.add(number);
    }

    return true;
}

export { areValuesUnique };
