import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default function ImputSearch(props) {
 
  return (
    <InputGroup className="mb-3 " >
      <InputGroup.Prepend>
        {/* <i class="fas fa-search"></i> */}
      </InputGroup.Prepend>
      <FormControl
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      >
      </FormControl>
    </InputGroup>
  );
}