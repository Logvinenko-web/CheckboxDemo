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
                const [auth,setAuth] = useState(false);
                const [ period, setPeriod ] = useState(false);
                
                 const[balanceKass, setBalanceKass] =useState(0)
                const [toggleShift, setToggleShift] = useState(false)
                const [taxes, setTaxes] = useState(false)
                const [modalReturn, setModalReturn] = useState(false)

                
const[totalSum,setTotalSum]= useState(0)
               
  const [data, setData] = useState( [
    {
        text1: 'Кіт',
        numberIndex: '1',
        numberPrice: '20000.00',
        total:0,
        amount:1,
        show: true
    }
],
  )

  const [dataKashier, setDataKashier] = useState( [
    {id:'',type: '', login: 'Kashier1', pinCode: "11111111" ,pib:'Бухгалтер Петрівна', justDo:"...",sendDps: true}
],
  )
  const [dataKass, setDataKass] = useState( [
   {id:'',type: '', fiscal: '40000****', numberKass: "1" ,tt:'Смаколики', justDo:"...", sendDps: true}
],
  )
  const [dataTt, setDataTt] = useState( [
   {type: '',
   name: 'Смаколики',
   adress: 'IВАНО-ФРАНКIВСЬКА ОБЛ., М. ІВАНО-ФРАНКІВСЬК, вул.Тичини,2',
   justDo: '...',
   sendDps: true}
],
  )
  const [dataGoods, setDataGoods] = useState( [
    { code: '1',
    name: 'Кіт',
    barcode: '29837722',
    price: 20000.00,
    taxes: '1',
    uktzed: '',
    justDo: '...',
    sendDps: true
  }
],
  )
  const [dataTaxes, setDataTaxes] = useState( [
   {
    letter: 'А',
    tax: '20',
    name: 'ПДВ А',
    meet:'0',
    code:'1',        
    justDo:'...'
   }
],
  )
             return (
                <Context.Provider value={{ period, setPeriod ,auth,setAuth,modalReturn, setModalReturn,totalSum,setTotalSum,dataTaxes, setDataTaxes,dataGoods,taxes, setTaxes, setDataGoods,goods,setGoods,dataTt, setDataTt,tt,setTt,kass,setKass,dataKass, setDataKass,setKashier,kashier,dataKashier,setDataKashier, count,balanceKass,smShowDown,setSmShowDown, setCount,setBalanceKass,smShow,setSmShow,info,setInfo,modal,setModal,modalX, setModalX,modalZ,setModalZ, data, setData, toggleShift, setToggleShift}}>
                    {props.children}
                 </ Context.Provider>
            )
        }
export default ContextProvider