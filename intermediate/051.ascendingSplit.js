function ascendingSplit(numbers) {
    const res = [];

    let i=0;

    while (i < numbers.length) {
        const interval = [numbers[i]];

        while (numbers[i] <= numbers[i+1]) {
            interval.push(numbers[i+1]);
            i++;
        }

        res.push(interval);
        i++;
    }
    
    return res;
}

export { ascendingSplit };
