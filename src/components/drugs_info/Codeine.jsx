import React from 'react';
import style from './Drug.module.css'
const Codeine = () => {
    return (
        <div className={style.wrapper}>
            <h1>Фармпрепараты, содержащие Кодеин (объект сложного, переменного либо спорного состава)</h1>
            Согласно Республиканскому перечню наркотических средств, психотропных веществ и их прекурсоров, подлежащих государственному контролю в Республике Беларусь, утвержденному Постановлением Министерства здравоохранения Республики Беларусь от 11.02.2015 г. №19 (в ред. постановления Министерства здравоохранения Республики Беларусь от 05.04.2023 г. № 50):<br/><br/>
            <b>- Кодеин</b><span className={style.redText}> (п. 2.1.Н02.1) является особо опасным наркотическим средством, разрешенным к контролируемому обороту.</span><br/><br/>
            Для кодеина установлен крупный размер в количестве более 5,0 граммов в соответствии с Постановлением Совета Министров Республики Беларусь от 9 сентября 2019 г. № 606.
            Крупным размером дозированных лекарственных средств, содержащих кодеин, независимо от количественного содержания (концентрации) является количество, превышающее 90 единиц дозированной лекарственной формы в соответствии с Постановлением Совета Министров Республики от 9 сентября 2019 г. №606.
            Могут не применяться некоторые меры государственного контроля в соответствии с Постановлением Министерства здравоохранения Республики Беларусь от 19 ноября 2019 г. №104:
            для лекарственных средств с содержанием наркотического средства кодеин в комбинации с другими фармацевтическими субстанциями (кроме наркотических средст, психотропных веществ):
            для дозированных лекарственных средств – менее 100 мг включительно на одну дозу;
            для недозированных лекарственных средств – менее 2,5 процента включительно в одной индивидуальной упаковке.
            <br/><br/>
        </div>
    );
};

export default Codeine;