import React from 'react';
import style from './Drug.module.css'
const NotFound = () => {
    return (
        <div className = {style.wrapper}>
            <h2>К сожалению, искомое вещество не найдено. Пожалуйста, попробуйте другие варианты поиска.</h2>
        </div>
    );
};

export default NotFound;