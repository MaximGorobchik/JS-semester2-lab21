import React, { useState } from 'react';

const Task_10 = () => {
    const [language, setLanguage] = useState('ukrainian'); // початкове значення вибраної мови

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value); // оновлюємо стан мови при зміні вибраного значення в першому селекті
    };

    return (
        <div>
            <select value={language} onChange={handleLanguageChange}>
                <option value="ukrainian">Ukrainian</option>
                <option value="english">English</option>
            </select>
            <select>
                {language === 'ukrainian' ? (
                    //якщо вибрано українську мову (використовуються юнікод-символи для українських слів, щоб забезпечити правильне відображення тексту на екрані)
                    <>
                        <option>{"\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A"}</option>
                        <option>{"\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A"}</option>
                        <option>{"\u0421\u0435\u0440\u0435\u0434\u0430"}</option>
                        <option>{"\u0427\u0435\u0442\u0432\u0435\u0440"}</option>
                        <option>{"\u041F\u0027\u044F\u0442\u043D\u0438\u0446\u044F"}</option>
                        <option>{"\u0421\u0443\u0431\u043E\u0442\u0430"}</option>
                        <option>{"\u041D\u0435\u0434\u0456\u043B\u044F"}</option>
                    </>
                ) : (
                    //якщо вибрано англійську мову
                    <>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                    </>
                )}
            </select>
        </div>
    );
};

export default Task_10;
