import React, { useState ,useContext} from 'react';
import { Form, FormGroup, Input,Label } from 'reactstrap';
import { Context } from '../context/context'
 import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function ImputFormKass({toggle}) {
  const {dataKass,setDataKass} = useContext(Context)

   const [inputData, setInputData] = useState({ type: '', fiscal: '40000****', numberKass: "" ,tt:'ВОЛИНСЬКА ОБЛ., М. ЛУЦЬК, Смаколики', justDo:"...", sendDps: false})
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputData(state => ({ ...state, [name]: value }))

  }
  const handleSubmit = (e) => {
    if(inputData.numberKass.length>0 ){

    e.preventDefault()
    setDataKass([...dataKass, inputData])
    toggle()
    }
  }
  return (
    <Form className='formKashier'>
      <FormGroup>
      <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="numberKass"
              label="Номер каси"
              name="numberKass"
              autoComplete="login"
              autoFocus
              onChange={handleChange}
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="pass"
              label="В даному полі потрібно вказати раніше додану торгову точку"
              name="password"
              disabled
            />
       
      
        <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit} 
             >
              Додати касу
            </Button>
       </FormGroup>
    </Form>
  );
}
