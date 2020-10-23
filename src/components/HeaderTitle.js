import React from 'react';
 

export default function HeaderTitle(props) {
const {title, src, alt} = props

  return (
     
    <div className='saleContainer'>
      <div className="saleTitle">{title}</div>
      <div className='support' > <img src={src} 
            alt={alt} /> </div> 
    </div>
    
  );
}
 
