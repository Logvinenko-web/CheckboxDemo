import React, { useEffect } from 'react';

export default function ReceiptTitle({ data, setData, setTotalSum, totalSum }) {
 
    const handleDelate = (name) => {
        const newData = data.map((item) => {
            if (name === item.text1) {
                return {
                    ...item,
                    show: false,
                    amount:1
                 }
      
            }

            return item
        })
        setData(newData)
    }
    const handleDelateAll = () => {
        const newData = data.map((item) => {
             
                return {
                    ...item,
                    show: false,
                    amount:1
                 }
      
             

         })
        setData(newData)
    }
     let filterData = () => {
 
        return data.filter(item => item.show)
    }
    useEffect(() => {
        let filterData = () => {
            return data.filter(item =>  item.show)
        } 
        setTotalSum(filterData().map(item => parseFloat(item.numberPrice) * item.amount).reduce((a, b) => (+a) + parseFloat(b), 0))
    }, [ data,setTotalSum])
    
    const handleDecrement = (name) => {
        const newData = data.map((item) => {
            if (name.text1 === item.text1) {
                return {
                    ...item,
                    amount: item.amount - 1 <= 0 ? item.amount : item.amount - 1,
                 }

            }
            return item
        })
        setData(newData)

    }
 
    const handleIncrenment = (name) => {
         const newDataIn = data.map((item) => {
            if (name.text1 === item.text1) {
                return {
                    ...item,
                     amount: item.amount + 1,

                }

            }
 
            return item
        })
        setData(newDataIn)
    }
 
    return (
        <>

            <div className='titleCheck'>Чек</div>


            <div className='boxStar'>
                <div className='checkStar'></div></div>

            {filterData().map((item, index) => {

                return (
                    <div className='containerPrice'>

                        <div className='goodsCheck'>
                            <div className='goodName'>
                                {item.text1}
                            </div>
                        </div>


                        <div className='boxCount'>
                            <span className='decrement' onClick={() => handleDecrement(item)}><i class="fas fa-minus"></i></span>
                            <div className='countReceipt'>{item.amount}</div>
                            <span className='increment' onClick={() => handleIncrenment(item)}><i class="fas fa-plus"></i></span>
                        </div>
                        <div className='boxPrice'>
                            <div className='SumPriceaCom'>
                                <div className='SumPrice'>x{parseFloat(item.numberPrice)+`₴`}</div>
                                <div className='price'>x{parseFloat(item.numberPrice) * (+item.amount)+'₴'}</div>

                            </div>
                            <button className='btnSum'><span onClick={() => handleDelate(item.text1)} className='spanClose'>x</span></button>
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
                    <button className='btnSum' onClick={handleDelateAll}><span className='spanClose'>x</span></button>
                </div>

            </div>
        </>
    );
}