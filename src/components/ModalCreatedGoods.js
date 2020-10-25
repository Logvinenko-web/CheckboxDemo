import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

import InputFormGoods from './InputFormGoods'
const ModalCreatedGoods = (props) => {
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
                <InputFormGoods toggle={toggle} />
            </DialogContent>
        </Dialog>
    );
}



export default ModalCreatedGoods;