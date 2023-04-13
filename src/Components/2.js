import React, { useState, useEffect } from 'react'

function Task_2() {

    const [selectedEmployees, setSelectedEmployees] = useState([
        { id: 1, firstName: "Ivan", lastName: "Petrov", salary: 3000 },
        { id: 2, firstName: "Maria", lastName: "Ivanova", salary: 2500 },
        { id: 3, firstName: "Petro", lastName: "Vasily", salary: 3500 },
        { id: 3, firstName: "Max", lastName: "Oleksandr", salary: 5500 },
        { id: 3, firstName: "Sasha", lastName: "Petrov", salary: 1500 }
    ]);
    const [totalSalary, setTotalSalary] = useState(0);

    const handleCheckboxChange = (index) => {
        const updatedSelectedEmployees = [...selectedEmployees];
        updatedSelectedEmployees[index].selected = !updatedSelectedEmployees[index].selected;
        setSelectedEmployees(updatedSelectedEmployees);
    }
    useEffect(() => {
        // Підрахунок суми зарплат вибраних працівників
        let total = 0;
        for (let i = 0; i < selectedEmployees.length; i++) {
            if (selectedEmployees[i].selected) {
                total += selectedEmployees[i].salary;
            }
        }
        setTotalSalary(total);
    }, [selectedEmployees]); // Вказуємо залежність від selectedEmployees
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedEmployees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.salary}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={employee.selected}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total salary of checked employees: {totalSalary}</p>
        </div>
    );
}

export default Task_2;