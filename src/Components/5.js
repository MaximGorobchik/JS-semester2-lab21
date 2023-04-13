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
        this.setState({ selectedItemIndex: index }); // Зберігаємо індекс вибраного елемента в стані компонента
    }

    handleInputBlur = () => {
        this.setState({ selectedItemIndex: null }); // При втраті фокусу на інпуті зникає виділення елемента
    }

    handleInputChange = (event) => {
        const { selectedItemIndex, items } = this.state;
        const newItems = [...items]; // Копіюємо масив елементів
        newItems[selectedItemIndex] = event.target.value; // Змінюємо значення вибраного елемента на нове

        this.setState({ items: newItems }); // Оновлюємо масив елементів в стані компонента
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
