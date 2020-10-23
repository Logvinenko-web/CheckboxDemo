import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Form from 'react-bootstrap/Form'
import {Context} from '../context/context'
import {useContext } from 'react';
import ButtonRegister from '../components/ButtonRegister'
import ButtonOut from '../components/ButtonOut'
import ButtonReport from '../components/ButtonReport'
import InputSearch from '../components/ImputSearch'
import InputEmail from '../components/InputEmail'
import ReactTable from '../components/ReactTable'
import TableAddGoods from '../components/TableAddGoods'
import ModalCreated from '../components/ModalCreated'
import ImputFormCashier from '../components/ImputFormCashier'
import ButtonСlosingShift from '../components/ButtonСlosingShift'


 
import '../index.css';
import { ReactComponent as Sale } from '../assets/image/sael.svg'
import { ReactComponent as ImgLogo } from '../assets/image/qwerty1.svg'
import { ReactComponent as Return } from '../assets/image/return.svg'
import { ReactComponent as Kashier } from '../assets/image/kashier.svg'
import { ReactComponent as Kass } from '../assets/image/kass.svg'
import { ReactComponent as Outlet } from '../assets/image/outlet.svg'
import { ReactComponent as Check } from '../assets/image/archivCheck.svg'
import { ReactComponent as Chenges } from '../assets/image/chenges.svg'
import { ReactComponent as Goods } from '../assets/image/goods.svg'
import { ReactComponent as Company } from '../assets/image/company.svg'
import { ReactComponent as Taxes } from '../assets/image/taxes.svg'
import { ReactComponent as Gide } from '../assets/image/gide.svg'
import { ReactComponent as LogoCheckbox } from '../assets/image/f1be010.svg'
import { ReactComponent as Sprite } from '../assets/image/sprite.svg'
import CheckReceipt from '../assets/image/checkReceipt.png'

import SaleS from '../assets/image/saleS.png'
import ReturS from '../assets/image/returnS.png'
import KashierS from '../assets/image/kashierS.png'
import SideBarLink from '../components/SideBarLink'
import KassS from '../assets/image/kassS.png'
import OutletS from '../assets/image/outletS.png'
import CheckS from '../assets/image/checkS.png'
import ChengesS from '../assets/image/changesS.png'
import GoodsS from '../assets/image/goodsS.png'
import CompanyS from '../assets/image/companyS.png'
import TaxesS from '../assets/image/taxS.png'
import GideS from '../assets/image/gideS.png'
import SalePage from '../components/HeaderTitle'
import HeaderTitle from '../components/HeaderTitle'
import SuportImg from '../assets/image/support.png'
import ImputSearch from '../components/ImputSearch';
export default function Portal() {
  const {modal, setModal,modalZ, setModalZ,modalX, setModalX,data,setData,toggleShift, setToggleShift} = useContext(Context)
  const toggle = () => setModal(!modal);
  const toggleZ = () => setModalZ(!modalZ);
  const toggleX = () => setModalX(!modalX);

const handleToggle = () =>{
  if(toggleShift===false){
    setToggleShift(true)
   

  } else {
    setToggleShift(false)
    toggleZ()
  }
  console.log(toggleShift)
} 
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2} className="sidebar">
          <Nav className="flex-column navItem">
            <SideBarLink titleClass='navItem1 logoCheck'><LogoCheckbox /><ImgLogo className='checkbox' /></ SideBarLink>
            <SideBarLink title='МОЯ КАСА' titleClass='navItem1 navTitle'></ SideBarLink>
            <SideBarLink eventKey='first' content='Продажа' titleClass='navItem1'><Sale /></ SideBarLink>
            <SideBarLink eventKey='second' content='Повернення' titleClass='navItem1'><Return /></ SideBarLink>
            <div className="vertical"></div>
            <SideBarLink title='УПРАВЛІННЯ КАСАМИ' titleClass='navItem1 navTitle'></ SideBarLink>
            <SideBarLink eventKey='third' content='Касири' titleClass='navItem1'><Kashier /></ SideBarLink>
            <SideBarLink eventKey='four' content='Каси' titleClass='navItem1'><Kass /></ SideBarLink>
            <SideBarLink eventKey='five' content='Торгові точки' titleClass='navItem1'><Outlet /></ SideBarLink>
            <SideBarLink eventKey='six' content='Архів чеків' titleClass='navItem1'><Check /></ SideBarLink>
            <SideBarLink eventKey='seven' content='Робочі зміни' titleClass='navItem1'><Chenges /></ SideBarLink>
            <SideBarLink eventKey='eigth' content='Товари' titleClass='navItem1'><Goods /></ SideBarLink>
            <div className="vertical"></div>
            <SideBarLink title='МОЯ ОРГАНІЗАЦІЯ' titleClass='navItem1 navTitle'></ SideBarLink>
            <SideBarLink eventKey='nine' content='Дані Організації' titleClass='navItem1'><Company /></ SideBarLink>
            <SideBarLink eventKey='ten' content='Податкові ставки' titleClass='navItem1'><Taxes /></ SideBarLink>
            <div className="vertical"></div>
            <SideBarLink eventKey='eleven' content='Інструкції' titleClass='navItem1'><Gide /></ SideBarLink>
          </Nav>
        </Col>
        <Col className="leftBar" >
          <Tab.Content>

            <Tab.Pane eventKey="first">
<ModalCreated modal={modal} toggle={toggle} classModal='modalConteiner' text='Шаблон чеку' img={CheckReceipt}/>
<ModalCreated modal={modalZ} toggle={toggleZ} classModal='modalConteiner' text='Шаблон z-звіту(який фомується після закриття зміни)' img={CheckReceipt}/>
<ModalCreated modal={modalX} toggle={toggleX} classModal='modalConteiner' text='Шаблон x-звіту(який фомується під час робочої зміни)' img={CheckReceipt}/>

              <HeaderTitle title="Продаж товару" src={SuportImg} alt='support' />
              <div className="buttonConteiner">
                <div className="buttonContainerRight">
                  < ButtonRegister text='↑ Внести готівку' />
                  <ButtonOut text='↓ Видати готівку' />
                </div>
                <div className="buttonContainerLeft">
                  <ButtonReport text='x-звіт' toggle={toggleX} disabled={toggleShift===false}/>
                  {toggleShift===false? <ButtonOut text='Відкрити зміну' toggle={handleToggle}/>: <ButtonСlosingShift text='Закрити зміну' toggleShift1={handleToggle}/>}
                </div>
              </div>
              <div className='createdReceiptConteiner'>
                <Row>
                  <Col className='createdGoods'>
                    <ImputSearch />
                    <TableAddGoods />
                  </Col>
                  <Col className='createdReceipt' xs lg="4">
                    <div className='check'>

                    </div>
                    <div className='emailBlock'>
                      <div className='emailTitle'>
                        Відправити на емейл
                </div>
                      <InputEmail />
                    </div>
                    <div className='radioPay'>
                      <Form.Check
                        type="radio"
                        label="Готівка"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="Картка"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                    </div>
                     <ButtonReport classBtn='btnCheck' text='Видати чек →' toggle={toggle} disabled={toggleShift===false}/>
                  </Col>
                </Row>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <ImputFormCashier data={data} setData={setData}/>
              <ReactTable data={data}/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
             </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

