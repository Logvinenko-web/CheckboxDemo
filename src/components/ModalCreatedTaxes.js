import React from 'react';
 import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import InputFormTaxes from './InputFormTaxes'
const ModalCreatedTt = (props) => {
    const {
        modal,
        toggle,
        text,

    } = props;



    return (


        <Dialog open={modal} onClose={toggle} arial-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>
                {text}
            </DialogTitle>
            <DialogContent>
                <InputFormTaxes toggle={toggle} />
            </DialogContent>
        </Dialog>
    );
}



export default ModalCreatedTt;