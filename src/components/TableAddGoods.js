import React from 'react';
import Table from 'react-bootstrap/Table'
import FormControl from 'react-bootstrap/FormControl'
import ButtonRegister from './ButtonRegister'
import {ReactComponent as ArrowRigth} from '../assets/image/arrow-rigth.svg'

export default function TableAddGoods(props) {
    const {text} = props
    
      return (     
        <Table responsive>
  <thead>
    <tr>
      <th>Найменування</th>
      <th>Код</th>
      <th>Ціна</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Кіт</td>
      <td><FormControl 
      className='inputGoods'
      value="1234"
      aria-label="Username"
      aria-describedby="basic-addon1"
    /></td>
      <td ><FormControl 
      className='inputGoods'
      value='122.00'
      aria-label="Username"
      aria-describedby="basic-addon1"
     
    /></td>
      <td><ButtonRegister classButton="btn-add" text="→"></ButtonRegister></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
      );
    }

