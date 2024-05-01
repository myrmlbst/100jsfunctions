function canDriveCar(user, car) {
    if (user.age>=18 || car.engineSize<1000) return true;
    else return false;
}

export { canDriveCar };