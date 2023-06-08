import React, {useRef, useState} from 'react';
import style from './Drugs.module.css'
import TylolHot from "./drugs_info/TylolHot";
import Cirrus from "./drugs_info/Cirrus";
import Corvalolum from "./drugs_info/Corvalolum";
import Codeine from "./drugs_info/Codeine";
import Menu from "./Menu";
import Marijuana from "./drugs_info/Marijuana";
import NotFound from "./drugs_info/NotFound";

const Drugs = () => {
    const[currentComponent, setCurrentComponent] = useState('');
    const components ={
        TylolHot: <TylolHot/>,
        Cirrus: <Cirrus/>,
        Corvalolum: <Corvalolum/>,
        Codeine: <Codeine/>,
        Marijuana: <Marijuana/>,
        NotFound: <NotFound/>
    }
    const drawComponent = (e) =>{
        if (nameField.current.value.toLowerCase().includes("tylol hot"))
            setCurrentComponent('TylolHot')
        else
        if (nameField.current.value.toLowerCase().includes("cirrus"))
            setCurrentComponent('Cirrus')
        else
        if (nameField.current.value.toLowerCase().includes("корвалол"))
            setCurrentComponent('Corvalolum')
        else
        if (nameField.current.value.toLowerCase().includes("кодеин"))
            setCurrentComponent('Codeine')
        else
        if (nameField.current.value.toLowerCase().includes("марихуана"))
            setCurrentComponent('Marijuana')
        else setCurrentComponent('NotFound')
    }

    const nameField = useRef();

    return (
        <div className={style.wrapper}>
            <h2>Ограничения и запреты на ввоз различных веществ (фармпрепараты, наркотические вещества)</h2>
            <h3>Данный инструмент позволит вам быстро установить, содержит ли объект проверки вещества или компоненты, оборот которых находится под контролем государства</h3>
            <br/>Введите название вещества:<br/><br/>
            <input type='text' placeholder='Название вещества' ref={nameField}/>
            <button onClick={drawComponent}>Поиск</button><br/>
            {components[currentComponent]}
        </div>
    );
};

export default Drugs;