function getUserObject(firstName, lastName, age) {
    const newUserObject = {
        age: age,
        name: `${firstName} ${lastName}`
    }
    return newUserObject;
}

export { getUserObject };