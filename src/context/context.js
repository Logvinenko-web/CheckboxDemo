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
                const [toggleShift, setToggleShift] = useState(false)
                const[data, setData] = useState( [
                        {
                            col1: '1',
                            col2: '2',
                            col3: '3',
                            col4: '4'
                        },
                        {
                            col1: '1',
                            col2: '2',
                            col3: '3',
                            col4: '4'
                        },
                        {
                            col1: '1',
                            col2: '2',
                            col3: '3',
                            col4: '4'
                        },
                    ],
                    
                )
            return (
                <Context.Provider value={{count,setCount,info,setInfo,modal,setModal,modalX, setModalX,modalZ,setModalZ, data, setData, toggleShift, setToggleShift}}>
                    {props.children}
                 </ Context.Provider>
            )
        }
export default ContextProvider