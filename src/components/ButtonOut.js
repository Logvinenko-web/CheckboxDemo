import React from 'react';
import Button from 'react-bootstrap/Button'

export default function ButtonOut(props) {
const {text, classBtn, toggle} = props

  return (     
  <Button  variant="secondary"><span className='v-btn__content' onClick={toggle}>{text}</span></Button>
  );
}