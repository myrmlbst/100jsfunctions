function addDays(initialDate, daysCount) {
    const ms = initialDate.getTime();
    const msPerDay = 24 * 60 * 60 * 1000;

    return new Date(ms + (msPerDay * daysCount));
}

export { addDays };
