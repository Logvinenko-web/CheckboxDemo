import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
 import Button from 'react-bootstrap/Button'
 import {ReactComponent as ImgLogo} from '../assets/image/qwerty.svg'
 import Img from '../assets/image/Organiz.png'
import Outlet from '../assets/image/outlet.png'
import Kashier from '../assets/image/kashier.png'
import Kass from '../assets/image/kass.png'
import Sale from '../assets/image/sale.png'
import Return from '../assets/image/return.png'
import Check from '../assets/image/check.png'
import Chenges from '../assets/image/chenges.png'
import Goods from '../assets/image/goods.png'
import Taxes from '../assets/image/taxes.png'
import Gide from '../assets/image/gide.png'
 
 import {Link} from 'react-router-dom' 
import {Context} from '../context/context'
import { useEffect,useContext } from 'react';

export default function StartPage() { 
   const {count, setCount, info, setInfo} = useContext(Context)
   
const handleCountDecrement=()=>{
    if (count<=9){
        setCount(count+1)
    }
  }
 const handleCountIncrement=()=>{
     if(count>0){
        setCount(count-1)
     }
    }
useEffect(() => {
   document.title = 'Checkbox Demo';

    switch (count){
        case 0: 
         return setInfo({
            title:'Дані організації',
            text:'В даному меню можна синхронізувати дані з дпс, якщо раніше Ви реєстрували торгову точку,касу або касира в кабінеті податкової то у Вас після синхронізації з ДПС підтянуться всі діючі торгові точки, каси і касири (вони будуть відображатись сірим кольором). Для того щоб синхронізувати з Checkbox виберіть навпроти “Дії” - “Конвертувати в Checkbox”', 
            image:Img}
            )
         case 1: 
         return setInfo({
            title:'Торгові точки',
            text:'В даному меню можна створити торгові точки за формою (Форма 20ОПП)', 
            image:Outlet}
            )
         case 2: 
         return setInfo({
            title:'Каси',
            text:'В даному меню можна створити каси', 
            image:Kass}
            )
         case 3: 
         return setInfo({
            title:'Касири',            
            text:'В даному меню можна створити касирів.Касира можна створити двома способами:Зчитати з ключа ЕЦП - завантажте ключ касира або електронну печатку, які будуть використовуватись для підпису. Ввести дані вручну - якщо ЕЦП касира або електронної печатки під рукою немає, вкажіть дані вручну', 
            image:Kashier}
            )
       
            case 4: 
            return setInfo({
               title:'Продаж',
               text:'В даному меню можна відкрити зміну, внести або винести готівку, створити чек, сформувати x-звіт і в кінці дня закрити зміну(при закритті фвтоматично сформується z-звіт)', 
               image:Sale}
               )
            
         case 5: 
         return setInfo({
               title:'Повернення',
               text:'В даному меню можна здійснити повернення чека або товарів в чеку за фіскальним номер', 
               image:Return}
               )
           
         case 6: 
            return setInfo({
               title:'Архів чеків',
               text:'В даному меню можна продивитись всі чеки, також можна відкрити кожен чек окремо', 
               image:Check}
               )
           
         case 7: 
            return setInfo({
               title:'Робочі зміни',
               text:'В даному меню відображені відкритті і закритті зміни касирів. Також в данному меню можна переглянути z-звіт закритих змін касира', 
               image:Chenges}
               )
           
         case 8: 
            return setInfo({
               title:'Товари',
               text:'В даному меню можна створити товари або заватнтажити CSV файл із товарами', 
               image:Goods}
               )
           
         case 9: 
            return setInfo({
               title:'Податкові ставки',
               text:'В данному меню налаштовуються податкові ставки. Користувачі які на єдинному податку меню податки не відображається', 
               image:Taxes}
               )
           
         case 10: 
            return setInfo({
               title:'Інсрукції',
               text:'В даному меню відображені інстукція по роботі з порталом, специфікація апі,можна завантажити файли для встановлення Checkbock каса і Checkbock підпис  ' ,
               image:Gide}
               )
            }
   
  },[count]);
  return (        

    <div className='containetTest'>
    <ImgLogo className='logo' />   
    <Card className="text-center" style={{ width: '50rem'}}>
    <Card.Header style={{fontSize: '2rem'} }>{info.title}</Card.Header>
    <Card.Body >
      <Card.Text style={{ height: '5rem'}}>{info.text}</Card.Text>
      <Card.Text>
     <img src={info.image} style={{ width: '40rem'}} style={{ height: '20rem'}}/>
      </Card.Text>
      <div className='BtnContainer'>
      <Button className="buttonLs" onClick={handleCountIncrement} disabled={count===0}>Назад</Button>
      {count===10?<Link to="/portal"><Button className="buttonLs">Продивитись демо</Button></Link>:<Button className="buttonLs" onClick={handleCountDecrement}  disabled={count===10}>Далі</Button>}
      
      </div>
    </Card.Body>
   </Card>  
   </ div>
   );

}

