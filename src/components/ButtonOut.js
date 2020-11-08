import React from 'react';
import Button from 'react-bootstrap/Button'

export default function ButtonOut(props) {
const {text, toggle, disabled} = props

  return (     
  <Button  variant="secondary" disabled={disabled} onClick={toggle}><span className='v-btn__content'   >{text}</span></Button>
  );
}