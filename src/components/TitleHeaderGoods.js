import React, { useContext } from 'react';
import ButtonRegister from './ButtonRegister'
import ButtonReport from './ButtonReport';
import ModalCreatedGoods from './ModalCreatedGoods'
import { Context } from '../context/context'
import InputSearchSem from './InputSearchSem'

const TitleHeaderGoods = ({text}) => {
    const {goods,setGoods} = useContext(Context)
     const toggleGoods = () => setGoods(!goods)

    return (
        <>
             < ModalCreatedGoods modal={goods} toggle={toggleGoods} text='Додати торгову точку' data={goods} setData={setGoods} classModal="dialogKashier"/>

            <div className="buttonConteiner">

                <div className="buttonContainerRight">
                    < ButtonRegister text={text} onClickBtn={toggleGoods}/>
                    <ButtonReport text='Імпортувати з csv файлу' />
                </div>
                <div className="buttonContainerLeft">
                <InputSearchSem />
                </div>
            </div>
        </>
    )
}

export default TitleHeaderGoods;