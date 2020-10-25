import React, { useContext } from 'react';
import ButtonRegister from './ButtonRegister'
import ButtonReport from './ButtonReport';
import ModalCreatedTt from './ModalCreatedTt'
import { Context } from '../context/context'
import InputSearchSem from './InputSearchSem'

const TitleHeaderTT = ({text}) => {
    const {tt,setTt} = useContext(Context)
     const toggleTt = () => setTt(!tt)

    return (
        <>
             < ModalCreatedTt modal={tt} toggle={toggleTt} text='Додати торгову точку' data={tt} setData={setTt} classModal="dialogKashier"/>

            <div className="buttonConteiner">

                <div className="buttonContainerRight">


                    < ButtonRegister text={text} onClickBtn={toggleTt}/>
                    <ButtonReport text='Оновити дані' />
                </div>
                <div className="buttonContainerLeft">
                <InputSearchSem />
                </div>
            </div>
        </>
    )
}

export default TitleHeaderTT;