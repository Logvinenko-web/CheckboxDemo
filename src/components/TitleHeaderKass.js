import React, { useContext } from 'react';
import ButtonRegister from './ButtonRegister'
import ButtonReport from './ButtonReport';
import ModalCreatedKass from './ModalCreatedKass'
import { Context } from '../context/context'
import InputSearchSem from './InputSearchSem'
import Tooltip from "@material-ui/core/Tooltip";

const TitleHeaderKass = ({text}) => {
    const {kass,setKass,dataKass,setDataKass} = useContext(Context)
     const toggleKass = () => setKass(!kass)
     const handlerUpdateStatus = () =>{
        const newData = dataKass.map(item=>(
            {
                ...item,
                sendDps:true
            }
        ))
        setDataKass(newData )
             }
             console.log(dataKass, "<-----dataKass")
     const longText = `
     Після додавання каси через 3-5 хв потрібно оновити дані для зміни типу каси із Відправлено в ДПС на Каса Checkbox, або для оновленнях даних із ДПС
     `
    return (
        <>
             < ModalCreatedKass modal={kass} toggle={toggleKass} text='Додати касу' data={kass} setData={setKass} classModal="dialogKashier"/>

            <div className="buttonConteiner">

                <div className="buttonContainerRight">


                    < ButtonRegister text={text} onClickBtn={toggleKass}/>
                    <Tooltip title={longText}>

                    <div>
                    <ButtonReport text='Оновити дані' handlerUpdateStatus={handlerUpdateStatus}/>
                    </div>
                    </Tooltip>
                </div>
                <div className="buttonContainerLeft">
                <InputSearchSem />
                </div>
            </div>
        </>
    )
}

export default TitleHeaderKass;