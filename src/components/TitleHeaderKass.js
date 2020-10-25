import React, { useContext } from 'react';
import ButtonRegister from './ButtonRegister'
import ButtonReport from './ButtonReport';
import ModalCreatedKass from './ModalCreatedKass'
import { Context } from '../context/context'
import InputSearchSem from './InputSearchSem'

const TitleHeaderKass = ({text}) => {
    const {kass,setKass} = useContext(Context)
     const toggleKass = () => setKass(!kass)

    return (
        <>
             < ModalCreatedKass modal={kass} toggle={toggleKass} text='Додати касу' data={kass} setData={setKass} classModal="dialogKashier"/>

            <div className="buttonConteiner">

                <div className="buttonContainerRight">


                    < ButtonRegister text={text} onClickBtn={toggleKass}/>
                    <ButtonReport text='Оновити дані' />
                </div>
                <div className="buttonContainerLeft">
                <InputSearchSem />
                </div>
            </div>
        </>
    )
}

export default TitleHeaderKass;