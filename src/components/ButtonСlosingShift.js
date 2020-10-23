import React from 'react';
import Button from 'react-bootstrap/Button'

export default function ButtonСlosingShift(props) {
const {text, classBtn, toggleShift1} = props

  return (     
  <Button  variant="danger" onClick={toggleShift1}><span className={classBtn}>{text}</span></Button>
  );
}