function getBusinessAddress(business) {
    const address = business.address;
    return `${address.street}, number ${address.number}, ${address.zipCode}`;
}

export { getBusinessAddress };
