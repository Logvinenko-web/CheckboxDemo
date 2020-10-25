import React, { useState, useContext } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Context } from '../context/context'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
 
export default function ImputFormKass({ toggle }) {
    const { dataGoods, setDataGoods } = useContext(Context)

    const [inputData, setInputData] = useState({
        code: '',
        name: '',
        barcode: '',
        price: null,
        taxes: '',
        uktzed: '',
        justDo: ''
    })
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputData(state => ({ ...state, [name]: value }))

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setDataGoods([...dataGoods, inputData])
        toggle()
    }
    return (
        <Form className='formKashier'>
            <FormGroup>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="code"
                    label="Код"
                    name="code"
                    autoFocus
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Найменування"
                    name="name"
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="price"
                    label="Ціна"
                    name="price"
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="barcode"
                    label="Штрихкод"
                    name="barcode"
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="taxes"
                    label="Податкова група"
                    name="taxes"
                    disabled

                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="uktzed"
                    label="УКТзЕД"
                    name="uktzed"
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
