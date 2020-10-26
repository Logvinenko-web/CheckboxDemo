import React from 'react';
 import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

import InpurFormCashier from './ImputFormCashier'
const ModalCreatedKashier = (props) => {
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
                <InpurFormCashier toggle={toggle} />
            </DialogContent>
        </Dialog>
    );
}



export default ModalCreatedKashier;