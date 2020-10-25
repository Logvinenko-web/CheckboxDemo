import React from 'react';
import Button from 'react-bootstrap/Button'

export default function ButtonOut(props) {
const {text, toggle, disabled} = props

  return (     
  <Button  variant="secondary"><span className='v-btn__content' onClick={toggle} disabled={disabled}>{text}</span></Button>
  );
}