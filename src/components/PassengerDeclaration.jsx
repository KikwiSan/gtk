import React from 'react';
import style from './PassengerDeclaration.module.css'
const PassengerDeclaration = () => {
    return (
        <div className= {style.PassengerDeclaration}>
            <h2>Заполнение пассажирской таможенной декларации</h2>
            <div className={style.info}>
                <div className= {style.blue_header}>
                    1. Сведения о декларанте<br/>
                </div>
                <div className={style.info_content}>
                    <input className={style.input} type = 'text' placeholder = 'Фамилия Имя Отчество'/> <br/>
                    <input className={style.input} type = 'text' placeholder = 'Документ, удостоверяющий личность'/><br/>
                    <input className={style.input} type = 'text' placeholder = 'Страна постоянного проживания'/><br/>
                    <input className={style.input} type = 'text' placeholder = 'Гражданство'/><br/>

                    <b>Страна отправления*</b>
                    <input className={style.white_input} type = 'text' placeholder = 'Код страны'/> <br/>
                    <b>Страна назначения*</b>
                    <input className={style.white_input} type = 'text' placeholder = 'Код страны'/> <br/>

                    <div className= {style.block_gray}>
                        <div className={style.gray_header}>Несовершеннолетние дети *</div><br/>
                        <div className={style.block_content}>
                            <input type='checkbox'/> Да
                            <input type='checkbox'/> Нет
                            <br/><br/><b>Количество</b><br/>
                            <input className={style.white_input} type ='text' placeholder='Количество'/>
                        </div>

                    </div>
                    <button>Заполнить</button>
                </div>

            </div>

            <div className={style.info}>
                <div className= {style.blue_header}>
                    2. Сведения о декларанте<br/>
                </div>
                <div className={style.info_content}>
                    <div className={style.block_gray}>
                        <div className={style.gray_header}>2.1 Совпровождаемый багаж</div><br/>
                        <div className={style.block_content}>
                            <input type='checkbox'/> Да
                            <input type='checkbox'/> Нет
                        </div>
                    </div>

                    <div className={style.block_gray}>
                        <div className={style.gray_header}>2.2 Несовпровождаемый багаж</div><br/>
                        <div className={style.block_content}>
                            <input type='checkbox'/> Да
                            <input type='checkbox'/> Нет
                        </div>
                    </div>

                    <div className={style.block_gray}>
                        <div className={style.gray_header}>2.3 Товары, доставляемые перевозчиком</div><br/>
                        <div className={style.block_content}>
                            <input type='checkbox'/> Да
                            <input type='checkbox'/> Нет
                        </div>
                    </div>

                </div>

            </div>
            <div className={style.info}>
                <div className={style.blue_header}>
                    3. Дополнительные сведения о товарах <br/>
                </div>
                <div className={style.info_content}>
                    <table border='1' bordercolor='#eaeaea' cellspacing ='0' cellpadding ='2px'>
                        <tr>
                            <td><b>№</b></td>
                        </tr>
                        <tr>
                            <td><b>Наименование</b></td>
                        </tr>
                        <tr>
                            <td><b>Вес</b></td>
                        </tr>
                        <tr>
                            <td><b>Количество</b></td>
                        </tr>
                        <tr>
                            <td><b>Стоимость</b></td>
                        </tr>
                    </table>
                </div>
                <button>Добавить </button>
            </div>

            <div className={style.info}>
                <div className= {style.blue_header}>
                    4. Сведения о транспортных средствах*<br/>
                </div>
                <div className={style.info_content}>
                    <div className={style.block_gray}>
                        <div className={style.block_content}>
                            <b>Цель перемещения*  </b>
                            <input className={style.white_input} type ='text' placeholder='Цель перемещения'/>
                        </div>
                    </div>
                    <div className={style.block_gray}>
                        <div className={style.block_content}>
                           Транспортные средства, ввозимые с освобождением от уплаты таможенных пошлин, налогов (ввоз со льготой)<br/><br/>
                            <input type='checkbox'/> Да
                            <input type='checkbox'/> Нет
                        </div>
                    </div>

                    <div className={style.block_gray}>
                        <div className={style.block_content}>
                            Авто- и мототранспортное средство<br/><br/>
                            <input type='checkbox'/> Да
                            <input type='checkbox'/> Нет
                            <br/><br/>Прицеп<br/><br/>
                            <input type='checkbox'/> Да
                            <input type='checkbox'/> Нет
                        </div>
                    </div>

                    <div className={style.block_gray}>
                        <div className={style.block_content}>
                            <table border='1' bordercolor='#eaeaea' cellSpacing='0' cellPadding='2px'>
                                <tr>
                                    <td><b>№</b></td>
                                </tr>
                                <tr>
                                    <td><b>Регистрационный номер</b></td>
                                </tr>
                                <tr>
                                    <td><b>Тип ТСЛП</b></td>
                                </tr>
                                <tr>
                                    <td><b>Марка</b></td>
                                </tr>
                                <tr>
                                    <td><b>Идентификационный номер</b></td>
                                </tr>
                            </table>
                            <button>Добавить</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default PassengerDeclaration;