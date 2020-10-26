import React, { useState, useEffect } from 'react';

export default function ReceiptTitle({ data, setData,setTotalSum,totalSum }) {
const [delatedGoodsItem, setDelatedGoodsItem] = useState([])
    
    const handleDelate = (name) => {
        setDelatedGoodsItem((state)=>[
            ...state,
            name
        ])

        
    }
useEffect(() =>{
 
    setTotalSum(filterData().map(item => parseFloat(item.numberPrice)*item.amount).reduce((a,b)=> (+a)+parseFloat(b),0))
},[delatedGoodsItem,data])
    const filterData = () =>{
        return data.filter(item=>!delatedGoodsItem.includes(item.text1))
    }
     const handleDecrement = (index) => {
        const newData = data.map((item, idx) => {
            if (index === idx) {
                return {
                    ...item,
                    amount: item.amount - 1 <= 0 ? item.amount : item.amount - 1,
                    // numberPrice:parseFloat (item.numberPrice) - (item.total)
                }

            }
            return item
        })
        setData(newData)

    }
     console.log(filterData(),'<-------filterdata')

     const handleIncrenment = (index) => {

        const newDataIn = data.map((item, idx) => {
            if (index === idx) {
                return {
                    ...item,
                    // numberPrice:parseFloat (item.numberPrice) + (item.total) ,
                    amount: item.amount + 1,

                }

            }
            return item
        })
        setData(newDataIn)
    }
    console.log(totalSum,'<----totalsum')

    return (
        <>

            <div className='titleCheck'>Чек</div>


            <div className='boxStar'>
                <div className='checkStar'></div></div>

            {filterData().map((item, index) => {
                
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
                            <button className='btnSum'><span onClick={() => handleDelate(item.
        text1)} className='spanClose'>x</span></button>
                        </div>
                    </div>
                )
            })}

            <div className='boxStar'> <div className='checkStar'></div></div>
            <div class='sum'>
                <div className='sumAll'>Сума разом:</div>

                
                    <div className='sumNumber'>
        <div className='sumNamber'>{totalSum}</div>
                        <div className='grn'><span className="curr-symbol">₴</span></div>
                        <button className='btnSum'><span className='spanClose'>x</span></button>
                    </div>
                
            </div>
        </>
    );
}