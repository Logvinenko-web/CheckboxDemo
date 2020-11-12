import React, { useContext } from 'react';
import ButtonRegister from './ButtonRegister'
import { TextField, MenuItem } from '@material-ui/core';
import { Context } from '../context/context'
import PeriodCheck from '../assets/image/periodCheck.png'
import ModalCreated from '../components/ModalCreated'

export default function ReportPeriodContainer() {
    const { period, setPeriod, dataKass } = useContext(Context)
    const togglePeriod = () => setPeriod(!period)
    return (
        <>
              <ModalCreated modal={period} toggle={togglePeriod} classModal='modalConteiner' text='Шаблон періодичного звіту' img={PeriodCheck} />

            <div className='conteinrerPeriod'>
                <div className='titlePeriod'>
                    Перчіодичний звіт
            </div>
                <TextField
                    id="data-period"
                    select
                    label='01.10.2020 - 11.11.2020'
                    variant="outlined"
                    margin='dense'
                    fullWidth
                    disabled
                />
                <TextField
                    id="kass-period"
                    select
                    label="Оберіть касу"
                    value={dataKass.numberKass}
                    fullWidth
                    margin='dense'
                    variant="outlined"
                >
                    {dataKass.map((option) => (
                        <MenuItem key={option.id} value={option.numberKass}>
                            {`Каса № ${option.numberKass} (${option.fiscal})`}
                        </MenuItem>
                    ))}
                </TextField>
                < ButtonRegister text={"+ Створити звіт"} onClickBtn={togglePeriod} />
            </div>
        </>
    )
}