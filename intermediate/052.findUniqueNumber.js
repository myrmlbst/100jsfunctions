function findUniqueNumber(numbers) {
    const foundNumbers = new Set();

    let uniqueNumber = 0;
    numbers.forEach((number) => {
        if (!foundNumbers.has(number)) {
            foundNumbers.add(number);
            uniqueNumber += number;
        }
        else {
            uniqueNumber -= number;
        }
    });

    return uniqueNumber;
}

export { findUniqueNumber };
