import React from 'react';
import Button from 'react-bootstrap/Button'

export default function ButtonReport(props) {
const {text, classBtn,toggle,disabled} = props

  return (     
  <Button className={classBtn} variant="dark" onClick={toggle} disabled={disabled}> {text} </Button>
  );
}