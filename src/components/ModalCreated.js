import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ButtonReport from './ButtonReport'
const ModalCreated = (props) => {
    const {
        buttonLabel,
        classModal,
        modal,
        toggle,
        text,
        img
    } = props;



    return (
        <div className='modalConteiner'>
            {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
            <Modal isOpen={modal} toggle={toggle} className={classModal}>
    <ModalHeader toggle={toggle}>{text}</ModalHeader>
                <ModalBody>
                   <img src={img} alt='Receipt'style={{heigth:'450px'}} />
                </ModalBody>
                <ModalFooter>
                    <ButtonReport text='Роздрукувати' classBtn='btnCheck'/>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalCreated;