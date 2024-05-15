function getHighestPaidEmployee(employees, departmentId) {
    const employeesInDepartment = employees.filter(employee => employee.departmentId === departmentId);

    if (employeesInDepartment.length === 0) return undefined;

    let employeeWithHighestSalary = employeesInDepartment[0];

    for (let i=1; i<employeesInDepartment.length; i++) {
        if (employeeWithHighestSalary.salary < employeesInDepartment[i].salary) {
            employeeWithHighestSalary = employeesInDepartment[i];
        }
    }

    return employeeWithHighestSalary.name;
}

export { getHighestPaidEmployee };