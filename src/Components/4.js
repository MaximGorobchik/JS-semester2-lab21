import React, { useState } from 'react'

class Task_4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [// Ініціалізуємо стан з масивом об'єктів користувачів, включаючи початковий стан чекбоксів (встановлено в false)
                { name: 'Mykola', surname: 'Shevchenko', age: 30, checked: false },
                { name: 'Vasya', surname: 'Chymak', age: 40, checked: false },
                { name: 'Petro', surname: 'Stecenko', age: 50, checked: false },
            ],
            showDetails: false,
        };
    }

    toggleDetails = () => {
        this.setState(prevState => ({
            showDetails: !prevState.showDetails
        }));
    }
    // Обробник події при зміні стану чекбоксу
    handleCheckboxChange = (index) => {
        const { users } = this.state;
        const newUsers = [...users]; // Копіюємо масив користувачів
        newUsers[index].checked = !newUsers[index].checked; // Міняємо стан чекбоксу на протилежний

        this.setState({ users: newUsers }); // Оновлюємо стан компонента з новими даними про користувачів
    }

    render() {
        const { users, showDetails } = this.state;
        return (
            <div>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                checked={user.checked}
                                onChange={() => this.handleCheckboxChange(index)} // Викликаємо обробник події при зміні стану чекбоксу
                            />
                            {user.checked ? `${user.name} ${user.surname} ${user.age}` : user.name} {/* Відображаємо дані користувача в залежності від стану чекбоксу */}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Task_4;