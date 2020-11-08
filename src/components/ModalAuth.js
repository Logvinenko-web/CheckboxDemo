import React, { useContext } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, MenuItem,Button } from '@material-ui/core';
import { Context } from '../context/context';
const ModalAuth = (props) => {
    const {
        modal,
        toggle,
        text,
        setBtnToggle
    } = props;
    const { dataKashier, dataKass } = useContext(Context)
const handleClick = () => {
    toggle();
    setBtnToggle(true);
}

    return (


        <Dialog open={modal} onClose={toggle} arial-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>
                {text}
            </DialogTitle> 
            <DialogContent>
                Після авторизації потрібно відкрити зміну для формування чеків
            </DialogContent>

            <DialogContent>
                <>
                <div className='authKashier'>
                <TextField
                    id="authKashier"
                    select
                    label="Касира"
                    value={dataKashier.login}
                    fullWidth
                    variant="outlined"
                >
                    {dataKashier.map((option) => (
                        <MenuItem key={option.id} value={option.login}>
                            {option.login}
                        </MenuItem>
                    ))}
                    
                </TextField> 
                </div>
                <div className='authKass'>
                 <TextField
                    id="authKass"
                    select
                    label="Каси"
                    value={dataKass.numberKass}
                    fullWidth
                    variant="outlined"
                >
                    {dataKass.map((option) => (
                        <MenuItem key={option.id} value={option.numberKass}>
                            {`№ Каси ${option.numberKass}`}
                        </MenuItem>
                    ))}
                </TextField>
                </div>
                <div className='btnAuth'>
                <Button
                    type="submit"
                     
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                >
                    Зберегти
            </Button>
            </div>
            </>
            </DialogContent>
        </Dialog>
    );
}



export default ModalAuth;