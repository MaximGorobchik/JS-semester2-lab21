import React, { useState } from "react";

const Task_9 = () => {

    const [employees, setEmployees] = useState([
        { id: 1, firstName: 'John', lastName: 'Doe', salary: 5000 },
        { id: 2, firstName: 'Jane', lastName: 'Smith', salary: 6000 },
        { id: 3, firstName: 'Michael', lastName: 'Johnson', salary: 5500 },
        { id: 4, firstName: 'Max', lastName: 'Oleks', salary: 8000 },
        { id: 5, firstName: 'Sasha', lastName: 'Vasyia', salary: 4500 },
    ]);
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState(1);

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 1 ? -1 : 1);
        } else {
            setSortColumn(column);
            setSortDirection(1);
        }
    };

    const sortedEmployees = sortColumn
        ? [...employees].sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) return -1 * sortDirection;
            if (a[sortColumn] > b[sortColumn]) return 1 * sortDirection;
            return 0;
        })
        : employees;

    return (
        <div>
            <h2>Click on column to sort!</h2>
        <table>
            <thead>
                <tr>
                    <th onClick={() => handleSort("firstName")}>Firstname</th>
                    <th onClick={() => handleSort("lastName")}>Lastname</th>
                    <th onClick={() => handleSort("salary")}>Salary</th>
                </tr>
            </thead>
            <tbody>
                {sortedEmployees.map((employee, index) => (
                    <tr key={index}>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.salary}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
};

export default Task_9;
