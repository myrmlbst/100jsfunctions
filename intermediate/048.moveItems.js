function moveItems(numbers, moveInstructions) {
    moveInstructions.forEach(({fromIndex, toIndex}) => {
        const numberToMove = numbers[fromIndex];
        
        numbers.splice(fromIndex, 1);
        numbers.splice(toIndex, 0, numberToMove);
    })

    return numbers;
}

export { moveItems };
