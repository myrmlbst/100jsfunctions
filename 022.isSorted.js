function isSorted(numbers) {
    let isAscending = true;
    let isDescending = true;

    for (let i=0; i<numbers.length-1; i++) {
        let curr = numbers[i];
        let next = numbers[i+1];

        if (curr>next) isAscending = false;
        
        if (curr<next) isDescending = false;
    }

    return isAscending || isDescending;
}

export { isSorted };
