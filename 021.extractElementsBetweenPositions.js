function extractElementsBetweenPositions(numbers, n, m) {
    const startingIndex = Math.min(m, n);
    const finalIndex = Math.max(m, n);

    return numbers.slice(startingIndex, (finalIndex+1));
}

export { extractElementsBetweenPositions };
