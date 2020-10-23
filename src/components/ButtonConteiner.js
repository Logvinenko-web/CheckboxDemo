import React from 'react';
 import ButtonRegister from './ButtonRegister'

export default function ButtonContainer(props) {
const {text} = props

  return (     
    <div className='buttonContainer'>
       <ButtonRegister text={text}/>
    </div>
  );
}
 