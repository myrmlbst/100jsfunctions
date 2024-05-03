function isSameDay(date1, date2) {
    const isSameDayOfMonth = date1.getDate() === date2.getDate();
    const isSameMonthOfYear = date1.getMonth() === date2.getMonth();
    const isSameYear = date1.getFullYear() === date2.getFullYear();

    return isSameDayOfMonth && isSameMonthOfYear && isSameYear;
}

export { isSameDay };
