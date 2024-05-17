function getDaysInMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const startOfMonth = new Date(year, month, 1);

    const startOfNextMonth = month === 11
        ? new Date(year+1, 0, 1)
        : new Date(year, month+1, 1);

    const DAY_MILLIS = 24 * 60 * 60 * 1000;
    const millisecondsBetween = startOfNextMonth.getTime() - startOfMonth.getTime();

    return millisecondsBetween / DAY_MILLIS;
}

export { getDaysInMonth };
