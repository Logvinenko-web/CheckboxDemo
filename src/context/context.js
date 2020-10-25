import React,  { createContext, useState } from "react"
import Img from '../assets/image/Organiz.png'


 export const Context = createContext();
        const ContextProvider = props=>{
            const [count, setCount] = useState(0);
            const [info, setInfo] = useState({
                title:'Дані організації',
                text:'В даному меню можна синхронізувати дані з дпс, якщо у Вас в кабінеті податкової вже зареєстровані каси і касири', 
                image:Img});
                const [modal, setModal] = useState(false);
                const [modalZ, setModalZ] = useState(false);
                const [modalX, setModalX] = useState(false);
                const [smShow, setSmShow] = useState(false);
                const [smShowDown, setSmShowDown] = useState(false);
                const[kashier,setKashier] = useState(false);
                const [kass,setKass] = useState(false);
                const [tt,setTt] = useState(false);
                const [goods,setGoods] = useState(false);

                 const[balanceKass, setBalanceKass] =useState(0)
                const [toggleShift, setToggleShift] = useState(false)
                const [taxes, setTaxes] = useState(false)

               
  const [data, setData] = useState( [
    {
        text1: 'Кіт',
        numberIndex: '1',
        numberPrice: '20000.00',
        total:0,
        amount:1
    }
],
  )
  const [dataKashier, setDataKashier] = useState( [
    {
        type: '',
        login: '',
        pinCode: '',
        pib:'',
        justDo:''
    }
],
  )
  const [dataKass, setDataKass] = useState( [
    {
        type: '',
        fiscal: '',
        numberKass: '',
        tt:'',
        justDo:''
    }
],
  )
  const [dataTt, setDataTt] = useState( [
    {
        type: '',
        name: '',
        adress: '',
        justDo:''
    }
],
  )
  const [dataGoods, setDataGoods] = useState( [
    {
        code: '',
        name: '',
        barcode: '',
        price:null,
        taxes:'',
        uktzed: '',
        justDo:''
    }
],
  )
  const [dataTaxes, setDataTaxes] = useState( [
    {
        letter: '',
        tax: '',
        name: '',
        meet:'',
        code:null,        
        justDo:''
    }
],
  )
             return (
                <Context.Provider value={{dataTaxes, setDataTaxes,dataGoods,taxes, setTaxes, setDataGoods,goods,setGoods,dataTt, setDataTt,tt,setTt,kass,setKass,dataKass, setDataKass,setKashier,kashier,dataKashier,setDataKashier, count,balanceKass,smShowDown,setSmShowDown, setCount,setBalanceKass,smShow,setSmShow,info,setInfo,modal,setModal,modalX, setModalX,modalZ,setModalZ, data, setData, toggleShift, setToggleShift}}>
                    {props.children}
                 </ Context.Provider>
            )
        }
export default ContextProvider