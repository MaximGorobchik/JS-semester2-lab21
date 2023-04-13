import React from 'react';

class Task_5 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ['Element 1', 'Element 2', 'Element 3'],
            selectedItemIndex: null,
        };
    }

    handleItemClick = (index) => {
        this.setState({ selectedItemIndex: index }); // �������� ������ ��������� �������� � ���� ����������
    }

    handleInputBlur = () => {
        this.setState({ selectedItemIndex: null }); // ��� ����� ������ �� ����� ����� �������� ��������
    }

    handleInputChange = (event) => {
        const { selectedItemIndex, items } = this.state;
        const newItems = [...items]; // ������� ����� ��������
        newItems[selectedItemIndex] = event.target.value; // ������� �������� ��������� �������� �� ����

        this.setState({ items: newItems }); // ��������� ����� �������� � ���� ����������
    }

    render() {
        const { items, selectedItemIndex } = this.state;

        return (
            <ul>
                {items.map((item, index) => (
                    <li key={index} onClick={() => this.handleItemClick(index)}>
                        {selectedItemIndex === index ? (
                            <input
                                type="text"
                                value={item}
                                onBlur={this.handleInputBlur}
                                onChange={this.handleInputChange}
                                autoFocus
                            />
                        ) : (
                            item
                        )}
                    </li>
                ))}
            </ul>
        );
    }
}

export default Task_5;
