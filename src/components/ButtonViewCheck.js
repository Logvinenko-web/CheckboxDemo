import React from 'react';
import Button from 'react-bootstrap/Button'

export default function ButtonViewCheck(props) {
const {text, classBtn,toggle,disabled,totalSum,setBalanceKass} = props

  return (     
  <Button className={classBtn} variant="dark" onClick={()=>{
    setBalanceKass(state => state + totalSum)
    toggle();
    
  }} disabled={disabled}> {text} </Button>
  );
} 