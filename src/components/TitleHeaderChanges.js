import React from 'react';
// import {KeyboardDatePicker,} from '@material-ui/pickers';
import InputSearchSem from './InputSearchSem'

const TitleHeaderChenges = ({ text }) => {
//     const [selectedDate, setSelectedDate] = React.useState(new Date('2020-10-26T21:11:54'));

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

    return (
        <>

            <div className="buttonConteiner">

                <div className="buttonContainerRight">
                    <InputSearchSem />
                    {/* <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }} */}
                                   </div>
                <div className="buttonContainerLeft">
                </div>
            </div>
        </>
    )
}

export default TitleHeaderChenges;