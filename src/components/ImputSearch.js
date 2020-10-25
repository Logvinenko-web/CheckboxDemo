import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import {FormGroup,Input} from 'reactstrap'

export default function ImputSearch(props) {
 
  return (
    // <InputGroup className="mb-3 " >
    //   <InputGroup.Prepend>
    //     <i class="fas fa-search"></i>
    //   </InputGroup.Prepend>
    //   <FormControl
    //     placeholder="Username"
    //     aria-label="Username"
    //     aria-describedby="basic-addon1"
    //   >
    //   </FormControl>
    // </InputGroup>
    <FormGroup>
      <i class="fas fa-search"></i>
         <Input
         className='inputSearch'
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="Пошук по каталогу товарів"
        ></Input>
       </FormGroup>
  );
}