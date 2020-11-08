import React, { useContext } from 'react';
import ButtonRegister from './ButtonRegister'
import ModalCreatedTaxes from './ModalCreatedTaxes'
import { Context } from '../context/context'
import InputSearchSem from './InputSearchSem'

const TitleHeaderTT = ({ text }) => {
    const { taxes, setTaxes } = useContext(Context)
    const toggleTaxes = () => setTaxes(!taxes)

    return (
        <>
            < ModalCreatedTaxes modal={taxes} toggle={toggleTaxes} text='Додати податкову ставку' data={taxes} setData={setTaxes} classModal="dialogKashier" />

            <div className="buttonConteiner">

                <div className="buttonContainerRight">


                    < ButtonRegister text={text} onClickBtn={toggleTaxes} />

                </div>
                <div className="buttonContainerLeft">
                    <InputSearchSem />
                </div>
            </div>
        </>
    )
}

export default TitleHeaderTT;