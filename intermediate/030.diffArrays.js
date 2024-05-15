function diffArrays(numbers1, numbers2) {
    const result = [];

    numbers1.forEach(nr => {
        if (!numbers2.includes(nr)) {
            result.push(nr);
        }
    });

    numbers2.forEach(nr => {
        if (!numbers1.includes(nr)) {
            result.push(nr);
        }
    });

    return result;
}

export { diffArrays };