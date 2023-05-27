import React from 'react';
import style from './Menu.module.css'
import gerb from '../images/gerb.png'
import blockedProducts from '../images/blockedProducts.png'
import declaration from '../images/declaration.png'
import recommendations from '../images/recommendations.png'
import drugs from '../images/drugs.png'
import notPersonalProducts from '../images/notPersonalProducts.png'
import {NavLink} from "react-router-dom";
const Menu = () => {
    return (
        <nav>
            <div className={style.main_header}>
                <div className={style.header_text}>
                    <span>Таможенный помощник</span>
                </div>
                <img className={style.gerb} src={gerb}></img>
            </div>
            <div className={style.wrapper}>
                <NavLink to='/declaration' className={style.block}>
                    <img className={style.logo} src={declaration}></img>
                    <span>Заполнить пассажирскую таможенную декларацию</span>
                </NavLink>
                <NavLink to='/blockedProducts' className={style.block}>
                    <img className={style.logo} src={blockedProducts}></img>
                    <span>Ограниченные и запрещенные к перемещению товары</span>
                </NavLink>
                <NavLink to='/notPersonalProducts' className={style.block}>
                    <img className={style.logo} src={notPersonalProducts}></img>
                    <span>Товары, не относящиеся к товарам для личного пользования</span>
                </NavLink>
                <NavLink to='/drugs' className={style.block}>
                    <img className={style.logo} src={drugs}></img>
                    <span>Ограничения и запреты на ввоз различных веществ</span>
                </NavLink>
                <NavLink to='/recommendation' className={style.block}>
                    <img className={style.logo} src={recommendations}></img><br/>
                    <span>Методические рекомендации по определению предназначению товаров</span>
                </NavLink>
            </div>
        </nav>
    );
};

export default Menu;