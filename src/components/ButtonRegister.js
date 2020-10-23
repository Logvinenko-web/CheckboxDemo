import React from 'react';
import Button from 'react-bootstrap/Button'

export default function ButtonContainer(props) {
const {text, classButton} = props

  return (     
  <Button variant="primary"  className={classButton}><span>{text}</span></Button>
  );
}