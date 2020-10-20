import React,  { createContext, useState } from "react"
import Img from '../assets/image/Organiz.png'


 export const Context = createContext();
        const ContextProvider = props=>{
            const [count, setCount] = useState(0);
            const [info, setInfo] = useState({
                title:'Дані організації',
                text:'В даному меню можна синхронізувати дані з дпс, якщо у Вас в кабінеті податкової вже зареєстровані каси і касири', 
                image:Img});
            return (
                <Context.Provider value={{count,setCount,info,setInfo}}>
                    {props.children}
                 </ Context.Provider>
            )
        }
export default ContextProvider