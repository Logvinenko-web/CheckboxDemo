import React, { useState, useContext } from 'react';
import { Form, FormGroup} from 'reactstrap';
import { Context } from '../context/context'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

export default function ImputFormKass({ toggle }) {
  const { dataKass, setDataKass, dataTt } = useContext(Context)

  const [inputData, setInputData] = useState({ type: '', fiscal: '40000****', numberKass: "", tt: '', justDo: "...", sendDps: false })
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputData(state => ({ ...state, [name]: value }))

  }
   const handleSubmit = (e) => {
    if (inputData.numberKass.length > 0) {

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
        className='kassSelect'
          variant="outlined"
          id="tt"
          select
          fullWidth
          label="Торгова точка"
          name="tt"
          value={inputData.taxes}
          onChange={handleChange}
        >
          {dataTt.map((option, index) => (
            <MenuItem key={index} value={option.name} >
              {option.name}, {option.adress}
            </MenuItem>

          ))}
        </TextField>


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
