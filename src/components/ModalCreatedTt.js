import React from 'react';
 import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import InpurFormTt from './InputFormTt'
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
                <InpurFormTt toggle={toggle} />
            </DialogContent>
        </Dialog>
    );
}



export default ModalCreatedTt;