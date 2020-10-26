import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Form from 'react-bootstrap/Form'
import { Context } from '../context/context'
import { useContext } from 'react';
import ButtonDps from "../components/ButtonDps";
 import ButtonZvit from '../components/ButtonZvit'
import ButtonRegister from '../components/ButtonRegister'
import ButtonOut from '../components/ButtonOut'
import ButtonReport from '../components/ButtonReport'
import InputSearch from '../components/ImputSearch'
import InputEmail from '../components/InputEmail'
  import ModalCreated from '../components/ModalCreated'
 import ButtonСlosingShift from '../components/ButtonСlosingShift'
import ReceiptTitle from '../components/ReceiptTitle'
import ReactTable from '../components/ReactTable'
import ModalBalance from '../components/ModalBalance'
 import TitleHeader from '../components/TitleHeader'
import KashierTable from '../components/KashierTable'
 import KassTable from '../components/KassTable'
import TitleHeaderKass from '../components/TitleHeaderKass'
 import TitleHeaderTT from '../components/TitleHeaderTT'
 import TtTable from '../components/TtTable'
 import TitleHeaderGoods from '../components/TitleHeaderGoods'
 import GoodsTable from '../components/GoodsTable'
 import TitleHeaderTaxes from '../components/TitleHeaderTaxes'
 import TaxesTable from '../components/TaxesTable'
 import TitleHeaderCheck from '../components/TitleHeaderCheck'
 import CheckTable from '../components/CheckTable'
 import TitleHeaderChanges from '../components/TitleHeaderChanges'
 import ChengesTable from '../components/ChengesTable'


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
 import CheckReceipt from '../assets/image/checkReceipt.png'
import ZReport from '../assets/image/z-report.png'
import XReport from '../assets/image/x-report.png'


 import ReturS from '../assets/image/returnS.png'
 import SideBarLink from '../components/SideBarLink'
 
import CompanyS from '../assets/image/companyS.png'
 import GideS from '../assets/image/gideS.png'
 import HeaderTitle from '../components/HeaderTitle'
import SuportImg from '../assets/image/support.png'
  export default function Portal() {
  const {totalSum,setTotalSum,dataTt,dataTaxes,dataGoods,dataKass, setDataKass,dataKashier,setDataKashier,setKashier,kashier,balanceKass,setBalanceKass, modal,setSmShowDown,smShowDown, setModal, modalZ, setModalZ, modalX, setModalX, data, setData, toggleShift, setToggleShift,setSmShow,smShow } = useContext(Context)
  const toggle = () => setModal(!modal);
  const toggleZ = () => setModalZ(!modalZ);
  const toggleX = () => setModalX(!modalX);
  const toggleSmShow = () => setSmShow(!smShow);
  const toggleSmShowDown = () => setSmShowDown(!smShowDown)
  const longText = `
  Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
  Praesent non nunc mollis, fermentum neque at, semper arcu.
  Nullam eget est sed sem iaculis gravida eget vitae justo.
  `;
  const [radio1, setRadio] =useState(false)
  const handleRadio = () => {
  if (radio1 === false) {
    setRadio(true)
  } else {
    setRadio(false)

  }
 }
  const handleToggle = () => {
    if (toggleShift === false) {
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
            <SideBarLink eventKey='nine' content='Продажа' titleClass='navItem1'><Sale /></ SideBarLink>
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
            <SideBarLink eventKey='first' content='Дані Організації' titleClass='navItem1'><Company /></ SideBarLink>

            <SideBarLink eventKey='ten' content='Податкові ставки' titleClass='navItem1'><Taxes /></ SideBarLink>
            <div className="vertical"></div>
            <SideBarLink eventKey='eleven' content='Інструкції' titleClass='navItem1'><Gide /></ SideBarLink>
          </Nav>
        </Col>
        <Col className="leftBar" >
          <Tab.Content>
          <Tab.Pane eventKey="first">
            <HeaderTitle title="Моя Організація" src={SuportImg} alt='support' />
         <ButtonDps text='Синхронізувати дані з ДПС'/>
         <img src={CompanyS} alt='Компанія'style={{height:'auto'}}/>

             </Tab.Pane>
            <Tab.Pane eventKey="nine">
              <ModalCreated modal={modal} toggle={toggle} classModal='modalConteiner' text='Шаблон чеку' img={CheckReceipt} />
              <ModalCreated modal={modalZ} toggle={toggleZ} classModal='modalConteiner' text='Шаблон z-звіту' img={ZReport} />
              <ModalCreated modal={modalX} toggle={toggleX} classModal='modalConteiner' text='Шаблон x-звіту' img={XReport} />
              < ModalBalance smShow={smShow} toggle={toggleSmShow} setSmShow={setSmShow} balanceKass={balanceKass} setBalanceKass={setBalanceKass} text='Внесення коштів' increment={true}/>
              < ModalBalance smShow={smShowDown} toggle={toggleSmShowDown} setSmShow={setSmShowDown} balanceKass={balanceKass} setBalanceKass={setBalanceKass} text='Винесення коштів' decrement={true}/>

              
              <HeaderTitle title="Продаж товару" src={SuportImg} alt='support' />
              <div className="buttonConteiner">

                <div className="buttonContainerRight">
                  <div className='balance'>
                    <div>
                      Каса:
                    </div>
                    <div className='balanceKass'>
  { `${balanceKass.toFixed(2)} ₴`}
                    </div>
                  </div>
                  < ButtonRegister  text='↑ Внести готівку'  onClickBtn={toggleSmShow} disabled={toggleShift === false}  />

                  <ButtonOut text='↓ Видати готівку' toggle={toggleSmShowDown} disabled={toggleShift === false}  />
                </div>
                
                <div className="buttonContainerLeft">
                
                  <ButtonZvit text='x-звіт' toggle={toggleX} disabled={toggleShift === false} />
                  {toggleShift === false ? <ButtonOut text='Відкрити зміну' toggle={handleToggle} /> : <ButtonСlosingShift text='Закрити зміну' toggleShift1={handleToggle} /> }
                 
                </div>
              </div>
              <div className='createdReceiptConteiner'>
                <Row>
                  <Col className='createdGoods'>
                    <InputSearch />
                    <ReactTable data={data} setData={setData} />

                  </Col>
                  <Col className='createdReceipt' xs lg="4">
                    <div className='check'>
                      <ReceiptTitle data={data} setData={setData} totalSum={totalSum} setTotalSum={setTotalSum}/>
                    </div>
                    <div className='emailBlock'>
                       <div className='emailTitle'>
                        Відправити на емейл
                </div>
 
                      <InputEmail />
                    </div>
                    <div className='containerPay'>
                      <div className='radioPay'>
                        <Form.Check
                          className='radioPay'
                          type="radio"
                          label="Готівка"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                           defaultChecked
                          onClick={handleRadio}
                        />
                        <Form.Check
                          type="radio"
                          label="Картка"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                          onClick={handleRadio}
                        />
                      </div>
                     {radio1===true? <div className='blockCash' style={{display:'none'}} >
                        <div className='titleCash'>
                          Отримано готівки
                      </div>
                        <div className='sumCash'>
                          0.00
                      </div>
                      </div>: <div className='blockCash'  >
                        <div className='titleCash'>
                          Отримано готівки
                      </div>
                        <div className='sumCash'>
                          0.00
                      </div>
                      </div>}

                    </div>
                    <ButtonZvit classBtn='btnCheck' text='Видати чек →' toggle={toggle} disabled={toggleShift === false} />
                  </Col>
                </Row>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <img src={ReturS} alt='Інструкція'/>

            </Tab.Pane>
            <Tab.Pane eventKey="third">
            <HeaderTitle title="Касири" src={SuportImg} alt='support' />
           < TitleHeader text='Додати касира'/>
           <KashierTable data={dataKashier} setData={setDataKashier}/>
            </Tab.Pane>
            <Tab.Pane eventKey="four">
            <HeaderTitle title="Каси" src={SuportImg} alt='support' />
           < TitleHeaderKass text='Додати касу'/>
           <KassTable data={dataKass} setData={setDataKass}/>
            </Tab.Pane>
            <Tab.Pane eventKey="five">
            <HeaderTitle title="Торгові точки" src={SuportImg} alt='support' />
           < TitleHeaderTT text='Додати торгову точку'/>
           <TtTable data={dataTt} />
            </Tab.Pane>
            <Tab.Pane eventKey="six">
            <HeaderTitle title="Архів чеків" src={SuportImg} alt='support' />
           < TitleHeaderCheck />
           <CheckTable  />
            </Tab.Pane>
            <Tab.Pane eventKey="seven">
            <HeaderTitle title="Робочі зміни" src={SuportImg} alt='support' />
           < TitleHeaderChanges />
           <ChengesTable />
            </Tab.Pane>
            <Tab.Pane eventKey="eigth">
            <HeaderTitle title="Товари" src={SuportImg} alt='support' />
           < TitleHeaderGoods text='Додати товар'/>
           <GoodsTable data={dataGoods} />
            </Tab.Pane>
            
            <Tab.Pane eventKey="ten">
            <HeaderTitle title="Податкові ставки" src={SuportImg} alt='support' />
           < TitleHeaderTaxes text='+ Додати податкову ставку'/>
           <TaxesTable data={dataTaxes} />
            </Tab.Pane>
            <Tab.Pane eventKey="eleven">
            <img src={GideS} alt='Інструкція'/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

