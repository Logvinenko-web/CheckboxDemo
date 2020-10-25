import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


const ModalBalance = ({ toggle, smShow, className,setBalanceKass,balanceKass,text,increment }) => {
  
  const [inputData, setInputData] = useState(0)
   const handleChange = (e) => {
     const value = e.target.value
    setInputData(state => ({ ...state, value }))
   }
   const handleSubmit = (e) => {
    e.preventDefault()
    if(increment){
      setBalanceKass(state => state + (+inputData.value))
    }else {
      
      setBalanceKass(state => {
        if(state - (+inputData.value)<0){
           return state
        }else {
         return state - (+inputData.value)
        }
      })
    }
    
    toggle()
 
  }
  return (
    <div>
      <Modal isOpen={smShow} toggle={toggle} className={className}>
  <ModalHeader toggle={toggle} >{text}</ModalHeader>
        <ModalBody>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
             </InputGroupAddon>
            <Input type='number' placeholder="0.00" onChange={handleChange}/>
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" isOpen={smShow} onClick={handleSubmit}>Надіслати</Button>
        </ModalFooter>
      </Modal>
    </div >
  );
}

export default ModalBalance;