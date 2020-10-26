import React from 'react';
 import {FormGroup,Input} from 'reactstrap'

export default function ImputSearch(props) {
 
  return (
    
    <FormGroup>
      <i className="fas fa-search"></i>
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