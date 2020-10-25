import React from 'react';
import Button from 'react-bootstrap/Button'

export default function ButtonCreated(props) {
 const {text, classButton,onClickBtn} = props

  return (     
  <Button variant="success" onClick={onClickBtn}  className={classButton}><span >{text}</span></Button>
  );
}