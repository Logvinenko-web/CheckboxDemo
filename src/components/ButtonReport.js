import React from 'react';
import Button from 'react-bootstrap/Button'

export default function ButtonReport(props) {
const {text, classBtn,toggle,disabled, handlerUpdateStatus} = props

  return (     
  <Button className={classBtn} variant="dark" onClick={()=>{
    // toggle();
    handlerUpdateStatus()
  }} disabled={disabled}> {text} </Button>
  );
}