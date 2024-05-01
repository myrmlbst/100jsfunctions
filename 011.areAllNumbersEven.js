function areAllNumbersEven(numbers) {
    const result = numbers.every((nr) => {
        return nr % 2 === 0;
    });
    
    return result;
}

export { areAllNumbersEven };