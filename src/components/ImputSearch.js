import React from 'react';
 import {FormGroup,Input} from 'reactstrap'

export default function ImputSearch({classInput,lable1,valueReturn}) {
 
  return (
    
    <FormGroup>
      <i className="fas fa-search"></i>
         <Input
         className={classInput}
          type="search"
          name="search"
          id="exampleSearch"
          value={valueReturn}
          placeholder={lable1}
        ></Input>
       </FormGroup>
  );
}