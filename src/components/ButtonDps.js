import React from 'react';
import Button from '@material-ui/core/Button';
import { Tooltip } from '@material-ui/core';

export default function ButtonDps(props) {
 const {text} = props
const prompt = 'Синхронізувати дані з ДПС потрібно для відображення кас, касирів, торгових точок, які раніше були додані в кабінеті ДПС.Дані будуть відображені з типом "Каса ДПС, Касир ДПС або Торгова точка ДПС".Ці дані потрібно конвертувати в Checkbox, це можна зробити у відповідному меню "Каси,Касири,Торгові точки"'
  return (  
    
      <div className='containerButtonDps'> 
      <Tooltip title={prompt}>
    <Button variant="contained" color="primary">
    {text}
  </Button>
  </ Tooltip> 
  </div>  
  
  );
}