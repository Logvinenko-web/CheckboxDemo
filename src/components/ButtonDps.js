import React from 'react';
import Button from '@material-ui/core/Button';

export default function ButtonDps(props) {
 const {text} = props

  return (  
      <div className='containerButtonDps'>  
    <Button variant="contained" color="primary">
    {text}
  </Button>
  </div>   
  );
}