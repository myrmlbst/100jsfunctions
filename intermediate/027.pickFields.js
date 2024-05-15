function pickFields(data, fields) {
    const properties = {};

    fields.forEach((field) => {
        if (data.hasOwnProperty(field)) {
            properties[field] = data[field];
        }
    })

    return properties;
}

export { pickFields };