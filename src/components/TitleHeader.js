import React, { useContext } from 'react';
import ButtonRegister from './ButtonRegister'
import ButtonReport from './ButtonReport';
import ModalCreatedKashier from './ModalCreatedKashier'
import { Context } from '../context/context'
import InputSearchSem from './InputSearchSem'
import Tooltip from "@material-ui/core/Tooltip";

const TitleHeader = ({ text }) => {
    const { kashier, setKashier,dataKashier, setDataKashier } = useContext(Context)
    const toggleKashier = () => setKashier(!kashier)
    const handlerUpdateStatus = () =>{
        const newData = dataKashier.map(item=>(
            {
                ...item,
                sendDps:true
            }
        ))
        setDataKashier(newData )
             }
             console.log(dataKashier, "<-----dataKashier")

    const longText = `
    Після додавання касира через 3-5хв потрібно оновити дані для зміни типу касира із Відправлено в ДПС на Касир Checkbox, або для оновленнях даних із ДПС
    `
    const add = `
Касира можна добаввити двома способавми: 1.Зчитати із ключа ЕЦП 2.Ввести дані вручну. Відмінність в тому що при зчитуванні з ключа ЕЦП не потрібно заповнювати поле "ідентифікатор ключа ЕЦП" - заповнюється автоматично. На тесту представлений спосіб - "Ввести дані вручну"    `
    
return (
        <>
            < ModalCreatedKashier modal={kashier} toggle={toggleKashier} text='Додати касира' data={kashier} setData={setKashier} classModal="dialogKashier" />

            <div className="buttonConteiner">

                <div className="buttonContainerRight">

                    <Tooltip title={add}>
                        <div>
                            < ButtonRegister text={text} onClickBtn={toggleKashier} />
                        </div>
                    </Tooltip>

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

export default TitleHeader;