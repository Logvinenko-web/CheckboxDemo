import React from 'react';
import Button from 'react-bootstrap/Button'

export default function ButtonContainer(props) {
 const {text, classButton,onClickBtn, classSpan,disabled} = props

  return (     
  <Button variant="primary" onClick={onClickBtn} disabled={disabled}  className={classButton}><span className={classSpan} >{text}</span></Button>
  );
}