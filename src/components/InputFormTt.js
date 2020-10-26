import React, { useState, useContext } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Context } from '../context/context'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

export default function ImputFormKass({ toggle }) {
    const { dataTt, setDataTt } = useContext(Context)
    const [currency, setCurrency] = React.useState('');

  const handleChangeSelect = (event) => {
    setCurrency(event.target.value);
  };
    const currencies =  [
        {
          value: 'USD',
          label: 'приміщення у власності',
        },
        {
          value: 'EUR',
          label: 'право постійного користування',
        },
        {
          value: 'BTC',
          label: 'приміщення в оренді',
        },
        
      ];
    const [inputData, setInputData] = useState({
        type: '',
        name: '',
        adress: '',
        justDo: '...',
        sendDps: false
    })
     const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputData(state => ({ ...state, [name]: value }))

    }
    const handleSubmit = (e) => {
      if(inputData.name.length>0 && inputData.adress.length>0  ){

        e.preventDefault()
        setDataTt([...dataTt, inputData])
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
                    id="name"
                    label="Назва торгової точки"
                    name="name"
                     autoFocus
                    onChange={handleChange}
                />
                <TextField
          id="standard-select-currency"
          select
          label="Вид права на торгову точку"
          value={currency}
          onChange={handleChangeSelect}
               helperText="Володієте чи орендуєте"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="typeOutlet"
                    label="Тип торгової точки"
                    name="typeOutlet"
                    disabled  
                 />
                   <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="region"
                    label="Виберіть область"
                    name="region"
                    disabled  
                 />
                   <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="adress"
                    label="Вулиця та номер будинку"
                    name="adress"
                    onChange={handleChange}

                 />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Додати торгову точку
            </Button>
            </FormGroup>
        </Form>
    );
}
