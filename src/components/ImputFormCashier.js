import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default function ImputFormCashier(props) {
const {text, classBtn,toggle, data,setData} = props
const [inputData, setInputData] =useState({email:'', text:'', col3:"4444", col4:'444'})
const handleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setInputData(state=>({...state,[name]:value}))
    
}
const handleSubmit = (e)=>{
    e.preventDefault()
    setData([...data, inputData])
}
  return (     
    <Form>
    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input type="email" name="col1" id="exampleEmail" placeholder="with a placeholder" onChange={handleChange} />
      <Input type="text" name="col2" id="exampleText" placeholder="with a placeholder" onChange={handleChange}/>

      <Button onClick={handleSubmit}>Submit</Button>
    </FormGroup>
    </Form>
  );
}
