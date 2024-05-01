function lastNRevert(text, n) {
    const newVar = text.slice(-n);
    return newVar.split("").reverse().join("");
}

export { lastNRevert };