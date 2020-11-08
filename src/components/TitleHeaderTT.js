import React, { useContext } from 'react';
import ButtonRegister from './ButtonRegister'
import ButtonReport from './ButtonReport';
import ModalCreatedTt from './ModalCreatedTt'
import { Context } from '../context/context'
import InputSearchSem from './InputSearchSem'
import Tooltip from "@material-ui/core/Tooltip";

const TitleHeaderTT = ({text}) => {
    const {tt,setTt,dataTt,setDataTt} = useContext(Context)
     const toggleTt = () => setTt(!tt)
     const handlerUpdateStatus = () =>{
const newData = dataTt.map(item=>(
    {
        ...item,
        sendDps:true
    }
))
setDataTt(newData )
     }
       const longText = `
     Потрібно оновити дані для зміни типу торгової точки із Відправлено в ДПС на Торгова точка Checkbox, або для оновленнях даних із ДПС
     `
    return (
        <>
             < ModalCreatedTt modal={tt} toggle={toggleTt} text='Додати торгову точку' data={tt} setData={setTt} classModal="dialogKashier"/>

            <div className="buttonConteiner">

                <div className="buttonContainerRight">


                    < ButtonRegister text={text} onClickBtn={toggleTt}/>
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

export default TitleHeaderTT;