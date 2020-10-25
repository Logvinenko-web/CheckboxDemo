import React, { useState, useEffect  } from 'react';

export default function ReceiptTitle({ data,setData }) {
    const [dataReceipt, setDataReceipt] = useState([])

    useEffect(() => {
             setDataReceipt([...data])
        
    },[data])
    const handleDelate = (index) => {
        const idx = dataReceipt.findIndex((item, i)=>i===index)
        console.log(idx)
        const newData = [...dataReceipt]
        newData.splice(idx, 1);
        console.log(newData)
        setDataReceipt(newData)
    }
     const handleDecrement = (index) => {
        const newData = data.map((item, idx) => {
            if (index === idx) {
                return {
                    ...item, 
                    amount: item.amount - 1 <= 0 ? item.amount : item.amount-1,
                    // numberPrice:parseFloat (item.numberPrice) - (item.total)
                }
                
            }
            return item
        })
        setData(newData)

    }
    const handleIncrenment = (index) => {

        const newDataIn = dataReceipt.map((item, idx) => {
            if (index === idx) {
                return {
                    ...item, 
                    // numberPrice:parseFloat (item.numberPrice) + (item.total) ,
                    amount: item.amount + 1,

                }
                
            }
            return item
        })
        setDataReceipt(newDataIn)
    }
    return (
        <>

            <div className='titleCheck'>Чек</div>


            <div className='boxStar'>
                <div className='checkStar'></div></div>

            {dataReceipt.map((item, index) => {
                return (
                    <div className='goodsCheck'>
                        <div className='goodName'>
                            {item.text1}
                        </div>
                        <div className='boxPrice'>
                            <div className='inputCount'>
                                <div className='boxCount'>
                                    <span className='decrement' onClick={() => handleDecrement(index)}>-</span>
                <div className='countReceipt'>{item.amount}</div>
                                    <span className='increment' onClick={() => handleIncrenment(index)}>+</span>

                                </div>
                            </div>
                            <div className='price'>x{parseFloat(item.numberPrice) * (+item.amount)}</div>
                            <button className='btnSum'><span onClick={()=>handleDelate(index)} className='spanClose'>x</span></button>
                        </div>
                    </div>
                )
            })}

            <div className='boxStar'> <div className='checkStar'></div></div>
            <div class='sum'>
                <div className='sumAll'>Сума разом:</div>
                <div className='sumNumber'>
                    <div className='sumNamber'>1111</div>
                    <div className='grn'><span className="curr-symbol">₴</span></div>
                    <button className='btnSum'><span className='spanClose'>x</span></button>
                </div>
            </div>
        </>
    );
}