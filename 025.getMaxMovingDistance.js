function getMaxMovingDistance(budget, weight, cost) {
    const totalCost = (cost/100/10) * weight;
    return budget / totalCost;
}

export { getMaxMovingDistance };
