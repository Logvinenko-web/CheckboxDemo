import React, { useContext } from 'react';
import ButtonRegister from './ButtonRegister'
import ButtonReport from './ButtonReport';
import ModalCreatedKashier from './ModalCreatedKashier'
import { Context } from '../context/context'
import InputSearchSem from './InputSearchSem'

const TitleHeader = ({text}) => {
    const {kashier,setKashier} = useContext(Context)
    const toggleKashier = () => setKashier(!kashier)
 
    return (
        <>
            < ModalCreatedKashier modal={kashier} toggle={toggleKashier} text='Додати касира' data={kashier} setData={setKashier} classModal="dialogKashier"/>
 
            <div className="buttonConteiner">

                <div className="buttonContainerRight">


                    < ButtonRegister text={text} onClickBtn={toggleKashier}/>
                    <ButtonReport text='Оновити дані' />
                </div>
                <div className="buttonContainerLeft">
                <InputSearchSem />
                </div>
            </div>
        </>
    )
}

export default TitleHeader;