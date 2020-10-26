import React, { useContext } from 'react';
import ButtonRegister from './ButtonRegister'
import ButtonReport from './ButtonReport';
import ModalCreatedGoods from './ModalCreatedGoods'
import { Context } from '../context/context'
import InputSearchSem from './InputSearchSem'
import Tooltip from "@material-ui/core/Tooltip";

const TitleHeaderGoods = ({text}) => {
    const {goods,setGoods} = useContext(Context)
     const toggleGoods = () => setGoods(!goods)
     const longText = `
     Імпорт нових товарів з csv файлу
     Код (артикул) - обов\`язкове;
     Найменування - обов\`язкове;
    Ціна (грн) - обов\`язкове;
    Штрихкод - може бути пустим;
    Податкові ставки - може бути пустим;
УКТзЕД - може бути пустим;
Використовуйте роздільник “;”
     `

    return (
        <>
             < ModalCreatedGoods modal={goods} toggle={toggleGoods} text='Додати торгову точку' data={goods} setData={setGoods} classModal="dialogKashier"/>

            <div className="buttonConteiner">

                <div className="buttonContainerRight">
                    < ButtonRegister text={text} onClickBtn={toggleGoods}/>
                   
                    <Tooltip title={longText}>
                    <div>
                    <ButtonReport text='Імпортувати з csv файлу' />
                    </div>
                    </ Tooltip>
                </div>
                <div className="buttonContainerLeft">
                <InputSearchSem />
                </div>
            </div>
        </>
    )
}

export default TitleHeaderGoods;