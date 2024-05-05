function arrayToObject(strings) {
    const result = {};

    strings.forEach((string, index) => {
        if (!result.hasOwnProperty(string)) {
            result[string] = index;
        }
    });

    return result;
}

export { arrayToObject };
