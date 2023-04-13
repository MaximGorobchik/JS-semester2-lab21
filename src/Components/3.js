import React, { useState} from 'react'

function Task_3() {
    const array = ["e1", "e2", "e3", "e4"];
    const [status, setStatus] = useState(
        array.reduce((ch, item) => {
            ch[item] = true; // За умовчанням усі чекбокси відзначені
            return ch;
        }, {})
    );
    const handleStatus = (e) => {
        const { name, checked } = e.target;
        setStatus({ ...status, [name]: checked });
    }

    return (
        <div>
            {array.map((item, index) => (
                <div key={index}>
                    <label>
                        <input type="checkbox" name={item} checked={status[item]} onChange={handleStatus}></input>
                    </label>
                    {status[item] && <p>{item}</p>}
                </div>
            ))}
        </div>
    );
}

export default Task_3;