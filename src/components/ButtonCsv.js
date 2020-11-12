import React from 'react';
import Button from 'react-bootstrap/Button'

export default function ButtonCsv(props) {
const {text, classBtn} = props

  return (     
  <Button className={classBtn} variant="dark"> {text} </Button>
  );
}