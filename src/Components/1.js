import React, { useState } from 'react'

function Task_1() {
    const [array, setArray] = useState([
        { id: 1, text: 'Item 1', checked: false }, { id: 2, text: 'Item 2', checked: false }, { id: 3, text: 'Item 3', checked: false }
    ]);

    const handleCheckBox = (ItemId) => {
        setArray(array.map(item => {
            if (item.id === ItemId) {
                return { ...item, checked: !item.checked };
            }
            return item;
        }));
    }
    return (
        <div>
            <ul>
                {array.map(item => (
                    <li key={item.id}><input type="checkbox" checked={array.checked} onChange={() => handleCheckBox(item.id)}></input>
                        <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Task_1;