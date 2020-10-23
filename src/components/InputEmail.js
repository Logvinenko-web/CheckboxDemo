import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default function ImputEmail(props) {
 
  return (     
    <InputGroup className="mb-3 " >
    
    <FormControl  
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  );
}