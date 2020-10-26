import React from 'react';
 import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import InpurFormKass from './ImputFormKass'
const ModalCreatedKass = (props) => {
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
                <InpurFormKass toggle={toggle} />
            </DialogContent>
        </Dialog>
    );
}



export default ModalCreatedKass;