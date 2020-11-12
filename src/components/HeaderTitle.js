import React from 'react';
 

export default function HeaderTitle(props) {
const {title, src, alt,text,classBlock} = props

  return (
     <>
    <div className='saleContainer'>
      <div className="saleTitle">{title}</div>
      <div className='support' > <img src={src} 
            alt={alt} /> </div> 
    </div>
    <div className={classBlock}><div className='containerTextHelper'><div className='textHelper'>{text}</div></div></div>
    </>
  );
}
 
