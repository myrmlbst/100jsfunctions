function getGasolineAmount(distance, consumptionPer100Km) {
    const totalDistance = distance * 2;
    const consumptionPerKm = consumptionPer100Km / 100;
    return totalDistance * consumptionPerKm;
}

export { getGasolineAmount };
