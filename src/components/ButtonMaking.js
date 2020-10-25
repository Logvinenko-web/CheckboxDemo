import React from 'react';
import Button from 'react-bootstrap/Button'

export default function ButtonMaking(props) {
 const {text,smShow,setSmShow} = props

  return (     
  <Button variant="primary" onClick={setSmShow(true)}> <span>{text}</span></Button>
  );
}