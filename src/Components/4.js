import React, { useState } from 'react'

class Task_4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [// ���������� ���� � ������� ��'���� ������������, ��������� ���������� ���� �������� (����������� � false)
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
    // �������� ��䳿 ��� ��� ����� ��������
    handleCheckboxChange = (index) => {
        const { users } = this.state;
        const newUsers = [...users]; // ������� ����� ������������
        newUsers[index].checked = !newUsers[index].checked; // ̳����� ���� �������� �� �����������

        this.setState({ users: newUsers }); // ��������� ���� ���������� � ������ ������ ��� ������������
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
                                onChange={() => this.handleCheckboxChange(index)} // ��������� �������� ��䳿 ��� ��� ����� ��������
                            />
                            {user.checked ? `${user.name} ${user.surname} ${user.age}` : user.name} {/* ³��������� ��� ����������� � ��������� �� ����� �������� */}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Task_4;