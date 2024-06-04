function isValidPassword(password) {
    const upperCaseCount = (password.match(/[A-Z]/g) || []).length;
    const hasDigit = password.match(/[0-9]/) !== null;
    const hasSymbol = password.match(/[_!?\*]/) !== null;

    return upperCaseCount >= 3 && hasDigit && hasSymbol;
}

export { isValidPassword };
