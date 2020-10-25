import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default function ImputEmail(props) {
 
  return (     
    <InputGroup className="mb-3 " >
    
    <FormControl  
    className='emailInput'
      placeholder="Email"
      aria-label="email"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  );
}