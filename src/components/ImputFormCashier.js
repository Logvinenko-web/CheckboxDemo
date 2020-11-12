import React, { useState ,useContext} from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Context } from '../context/context'
 import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function ImputFormCashier({toggle}) {
  const {dataKashier,setDataKashier} = useContext(Context)

   const [inputData, setInputData] = useState({ type: '', login: '', pinCode: "11111111" ,pib:'', justDo:"..."})
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputData(state => ({ ...state, [name]: value }))

  }
  const handleSubmit = (e) => {
   if(inputData.login.length>0 && inputData.pinCode.length>0 && inputData.pib.length>0){
    e.preventDefault()
    setDataKashier([...dataKashier, inputData])
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
              id="login"
              label="Придумайте логін"
              name="login"
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
              label="Придумайте пароль"
              name="password"
               
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="pib"
              label="Вкажіть ПІБ ксира"
              name="pib"
                onChange={handleChange}
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="login"
              label="Вкажіть ідентифікатор ключа ЕЦП"
              name="text"
              autoComplete="certificate"
              onChange={handleChange}
            />
        {/* <Input type="password" name="pass" id="examplePass" placeholder="Придумайте пароль" />
        <Input type="text" name="pib" id="examplePib" placeholder="Вкажіть ПІБ ксира" onChange={handleChange} />
        <Input type="text" name="certificate" id="examplecertificate" placeholder="Вкажіть ідентифікатор ключа ЕЦП"  />

 */}

        
        <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit} 
             >
              Додати касира
            </Button>
        {/* <ButtonCreated onClickBtn={handleSubmit} text='Додати касира' classButton='btn-addKasier'/> */}
      </FormGroup>
    </Form>
  );
}
