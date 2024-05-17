function formatDateTime(date, locale) {
    return new Intl.DateTimeFormat(locale, {
        dateStyle: 'long',
        timeStyle: 'short',
        hour12: false
    }).format(date);
}

export { formatDateTime };
