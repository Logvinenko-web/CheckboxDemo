import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

import InpurFormCashier from './ImputFormCashier'
const ModalCreatedKashier = (props) => {
    const {

        classModal,
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