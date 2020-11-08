import React from 'react';
import Button from 'react-bootstrap/Button'

export default function ButtonReport(props) {
const {text, classBtn,disabled, handlerUpdateStatus} = props

  return (     
  <Button className={classBtn} variant="dark" onClick={()=>{
    
    handlerUpdateStatus()
  }} disabled={disabled}> {text} </Button>
  );
}