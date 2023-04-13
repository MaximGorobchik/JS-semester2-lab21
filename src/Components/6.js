import React from 'react';

class Task_6 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                { name: 'Mykola', age: 30 },
                { name: 'Vasya', age: 40 },
                { name: 'Petro', age: 50 },
            ],
            editableRowIndex: null, // Індекс редагованого рядка
        };
    }

    handleEditClick = (index) => {
        this.setState({ editableRowIndex: index }); // Зберігаємо індекс редагованого рядка в стані компонента
    }

    handleInputChange = (event, index) => {
        const { users } = this.state;
        const newUsers = [...users]; // Копіюємо масив користувачів
        newUsers[index][event.target.name] = event.target.value; // Змінюємо значення вибраного поля користувача на нове

        this.setState({ users: newUsers }); // Оновлюємо масив користувачів в стані компонента
    }

    handleInputBlur = () => {
        this.setState({ editableRowIndex: null }); // При втраті фокусу на інпуті зникає режим редагування
    }

    render() {
        const { users, editableRowIndex } = this.state;

        return (
            <table>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>
                                {editableRowIndex === index ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={user.name}
                                        onChange={(event) => this.handleInputChange(event, index)}
                                        onBlur={this.handleInputBlur}
                                        autoFocus
                                    />
                                ) : (
                                    user.name
                                )}
                            </td>
                            <td>
                                {editableRowIndex === index ? (
                                    <input
                                        type="number"
                                        name="age"
                                        value={user.age}
                                        onChange={(event) => this.handleInputChange(event, index)}
                                        onBlur={this.handleInputBlur}
                                    />
                                ) : (
                                    user.age
                                )}
                            </td>
                            <td>
                                <button onClick={() => this.handleEditClick(index)}>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Task_6;
