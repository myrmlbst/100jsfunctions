function getDevelopers(employees) {
    return employees.filter((employee) => {
        return employee.job === "developer";
    })
}

export { getDevelopers };
