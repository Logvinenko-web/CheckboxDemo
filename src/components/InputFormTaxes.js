import React, { useState, useContext } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Context } from '../context/context'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
 
export default function ImputFormKass({ toggle }) {
    const { dataTaxes, setDataTaxes } = useContext(Context)

    const [inputData, setInputData] = useState({
        letter: '',
        tax: '',
        name: '',
        meet:'',
        code:"",        
        justDo:'...'
    })
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputData(state => ({ ...state, [name]: value }))

    }
    const handleSubmit = (e) => {
        if(inputData.letter.length>0 ){

        e.preventDefault()
        setDataTaxes([...dataTaxes, inputData])
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
                    id="letter"
                    label="Літера"
                    name="letter"
                    autoFocus
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="tax"
                    label="Податкова ставка"
                    name="tax"
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Назва податку"
                    name="name"
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="meet"
                    label="Додатковий збір"
                    name="meet"
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="code"
                    label="Код податку"
                    name="code"
                    onChange={handleChange}


                />
                


                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Зберегти
            </Button>
            </FormGroup>
        </Form>
    );
}
