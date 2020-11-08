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
import InputSearch from '../components/ImputSearch'
import InputEmail from '../components/InputEmail'
import ModalCreated from '../components/ModalCreated'
import ButtonСlosingShift from '../components/ButtonСlosingShift'
import ReceiptTitle from '../components/ReceiptTitle'
import ReactTable from '../components/SaleTable'
import ModalBalance from '../components/ModalBalance'
import TitleHeader from '../components/TitleHeader'
import KashierTable from '../components/KashierTable'
import KassTable from '../components/KassTable'
import TitleHeaderKass from '../components/TitleHeaderKass'
import TitleHeaderTT from '../components/TitleHeaderTT'
import TtTable from '../components/OutletTable'
import TitleHeaderGoods from '../components/TitleHeaderGoods'
import GoodsTable from '../components/GoodsTable'
import TitleHeaderTaxes from '../components/TitleHeaderTaxes'
import TaxesTable from '../components/TaxesTable'
import TitleHeaderCheck from '../components/TitleHeaderCheck'
import CheckTable from '../components/CheckTable'
import TitleHeaderChanges from '../components/TitleHeaderChanges'
import ChengesTable from '../components/ChengesTable'
import ReturnContainer from '../components/ReturnContainer'
import Button from '@material-ui/core/Button';


import ModalAuth from '../components/ModalAuth'

import ButtonViewCheck from '../components/ButtonViewCheck'

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
import { ReactComponent as Pays } from '../assets/image/pay.svg'

import { ReactComponent as ReportPeriod } from '../assets/image/report-period.svg'

import CheckReceipt from '../assets/image/checkReceipt.png'
import ZReport from '../assets/image/z-report.png'
import XReport from '../assets/image/x-report.png'


import SideBarLink from '../components/SideBarLink'
import Dashbord from '../assets/image/dashbord.png'
import ReturnCkeck from '../assets/image/returnCheck.png'
import Pay from '../assets/image/pay.png'

import CompanyS from '../assets/image/companyS.png'
import GideS from '../assets/image/gideS.png'
import HeaderTitle from '../components/HeaderTitle'
import SuportImg from '../assets/image/support.png'
export default function Portal() {
  const { auth, setAuth, setModalReturn, modalReturn, totalSum, setTotalSum, dataTt, dataTaxes, dataGoods, dataKass, setDataKass, dataKashier, setDataKashier, balanceKass, setBalanceKass, modal, setSmShowDown, smShowDown, setModal, modalZ, setModalZ, modalX, setModalX, data, setData, toggleShift, setToggleShift, setSmShow, smShow } = useContext(Context)
  const toggle = () => setModal(!modal);
  const toggleZ = () => setModalZ(!modalZ);
  const toggleX = () => setModalX(!modalX);
  const toggleSmShow = () => setSmShow(!smShow);
  const toggleSmShowDown = () => setSmShowDown(!smShowDown)
  const toggleReturn = () => setModalReturn(!modalReturn);
  const toggleAuth = () => setAuth(!auth);
  const [btnToggle, setBtnToggle] = useState(false)
  const [radio1, setRadio] = useState(false)
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

            <SideBarLink eventKey='first' titleClass='navItem1 logoCheck'><LogoCheckbox /><ImgLogo className='checkbox' /></ SideBarLink>
            <SideBarLink title='МОЯ КАСА' titleClass='navItem1 navTitle' ></ SideBarLink>
            <div onClick={toggleAuth}> <SideBarLink eventKey='nine' content='Продажа' titleClass='navItem1'><Sale /></ SideBarLink></div>
            <SideBarLink eventKey='second' content='Повернення' titleClass='navItem1'><Return /></ SideBarLink>
            <SideBarLink eventKey='thirteen' content='Звіти' titleClass='navItem1'><ReportPeriod /></ SideBarLink>
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
            <SideBarLink eventKey='twelve' content='Дані Організації' titleClass='navItem1'><Company /></ SideBarLink>
            <SideBarLink eventKey='fourteen' content='Оплата' titleClass='navItem1'><Pays /></ SideBarLink>
            <SideBarLink eventKey='ten' content='Податкові ставки' titleClass='navItem1'><Taxes /></ SideBarLink>
            <div className="vertical"></div>
            <SideBarLink eventKey='eleven' content='Інструкції' titleClass='navItem1'><Gide /></ SideBarLink>
          </Nav>
        </Col>
        <Col className="leftBar" >
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <>
              <span role="img" aria-label="xxxxx" className='textDashbord'>💡 Це головний екран порталу. Тут є коротка аналітика у вигляді графіка
</span>
                <img src={Dashbord} alt='Дашборд' />
              </>
            </Tab.Pane>
            <Tab.Pane eventKey="nine">
              <ModalCreated modal={modal} toggle={toggle} classModal='modalConteiner' text='Шаблон чеку' img={CheckReceipt} />
              <ModalCreated modal={modalZ} toggle={toggleZ} classModal='modalConteiner' text='Шаблон z-звіту' img={ZReport} />
              {btnToggle === false && <ModalAuth modal={auth} toggle={toggleAuth} classModal='modalConteiner' text='Авторизація касира' setBtnToggle={setBtnToggle} />}

              <ModalCreated modal={modalX} toggle={toggleX} classModal='modalConteiner' text='Шаблон x-звіту' img={XReport} />
              <ModalCreated modal={modalReturn} toggle={toggleReturn} classModal='modalConteiner' text='Шаблон чеку повернення' img={ReturnCkeck} />
              < ModalBalance smShow={smShow} toggle={toggleSmShow} setSmShow={setSmShow} balanceKass={balanceKass} setBalanceKass={setBalanceKass} text='Внеcти готівку' increment={true} />
              < ModalBalance smShow={smShowDown} toggle={toggleSmShowDown} setSmShow={setSmShowDown} balanceKass={balanceKass} setBalanceKass={setBalanceKass} text='Видати готівку' decrement={true} />


              <HeaderTitle title="Продаж товару" src={SuportImg} alt='support' text='💡 На цій сторінці можна видавати чеки. Спробуйте додати товар в чек та натисніть “Видати чек”'
              />
              <div className="buttonConteiner">

                <div className="buttonContainerRight">
                  <div className='balance'>
                    <div >
                      Каса:
                    </div>
                    <div className='balanceKass'>
                      {toggleShift === false ? '-' : `${balanceKass.toFixed(2)} ₴`}
                    </div>
                  </div>
                  < ButtonRegister text='↑ Внести готівку' onClickBtn={toggleSmShow} disabled={toggleShift === false} />

                  <ButtonOut text='↓ Видати готівку' toggle={toggleSmShowDown} disabled={toggleShift === false} />
                </div>

                <div className="buttonContainerLeft">

                  <ButtonZvit text='x-звіт' toggle={toggleX} disabled={toggleShift === false} />
                  {toggleShift === false ? <ButtonOut text='Відкрити зміну' toggle={handleToggle} /> : <ButtonСlosingShift text='Закрити зміну' toggleShift1={handleToggle} />}

                </div>
              </div>
              <div className='createdReceiptConteiner'>
                <Row>
                  <Col className='createdGoods'>
                    <InputSearch />
                    <ReactTable data={data} setData={setData} />

                  </Col>
                  <Col className='createdReceipt' xs lg="5">
                    <div className='check'>
                      <ReceiptTitle data={data} setData={setData} totalSum={totalSum} setTotalSum={setTotalSum} />
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
                      {radio1 === false && <div className='blockCash' >
                        <div className='titleCash'>
                          Отримано готівки
                      </div>
                        <div className='sumCash'>
                          <input className='inputCash' type="text" placeholder="0.00" />

                        </div>
                      </div>}

                    </div>
                    <ButtonViewCheck classBtn='btnCheck' text='Видати чек →' toggle={toggle} setBalanceKass={setBalanceKass} totalSum={totalSum} disabled={toggleShift === false} />
                  </Col>
                </Row>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <HeaderTitle title="Повернення товару" src={SuportImg} alt='support' text='💡 На цій сторінці можна повернути товар. В поле для пошуку вноситься фіскальний номер чеку. Натисніть “Повернути” щоб сформувати чек повернення
'/>
              <div className="buttonConteiner">
                <div className='balance'>
                  <div>
                    Каса:
                    </div>
                  <div className='balanceKass'>
                    {toggleShift === false ? '-' : `${balanceKass.toFixed(2)} ₴`}
                  </div>
                </div>
                <div className="buttonContainerLeft">
                  {toggleShift === false ? <ButtonOut text='Відкрити зміну' toggle={handleToggle} /> : <ButtonСlosingShift text='Закрити зміну' toggleShift1={handleToggle} />}
                </div>
              </div>
              <Row>
                <Col className='createdGoods'>
                  <div className='containerReturn' >
                    <InputSearch classInput='inputSearchReturnCheck' />
                    <div className='btn-search'>
                      < ButtonRegister text='пошук' />
                    </div>
                  </div>  <>
                    <div className='boxReturn'>
                      <ReturnContainer />
                      <div className='btn-returnContainer'>
                        <Button variant="contained" className='btn-return' onClick={toggleReturn}>
                          Повернути
                    </Button>
                      </div>
                    </div>
                  </>


                </Col>
                <Col>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <HeaderTitle title="Касири" src={SuportImg} alt='support' text='💡 На цій сторінці можна додати касира. Для створення касира необхідно вказати ЕЦП, яким будуть підписуватись чеки. Спробуйте додати касира
'/>
              < TitleHeader text='Додати касира' />
              <KashierTable data={dataKashier} setData={setDataKashier} />
            </Tab.Pane>
            <Tab.Pane eventKey="four">
              <HeaderTitle title="Каси" src={SuportImg} alt='support' text='💡 На цій сторінці можна зареєструвати програмну касу. Перед створенням каси у вас має бути зареєстрована торгова точка. Торгову точку також можна зареєструвати на на нашому порталі
'/>
              < TitleHeaderKass text='Додати касу' />
              <KassTable data={dataKass} setData={setDataKass} />
            </Tab.Pane>
            <Tab.Pane eventKey="five">
              <HeaderTitle title="Торгові точки" src={SuportImg} alt='support' text='💡 Тут можна створити торгову точку. По суті, це подача форми 20-ОПП про реєстрацію господарської одиниці
'/>
              < TitleHeaderTT text='Додати торгову точку' />
              <TtTable data={dataTt} />
            </Tab.Pane>
            <Tab.Pane eventKey="six">
              <HeaderTitle title="Архів чеків" src={SuportImg} alt='support' text='💡 В цьому меню ви можете переглядати і в будь який момент завантажити видані чеки
'/>
              < TitleHeaderCheck />
              <CheckTable />
            </Tab.Pane>
            <Tab.Pane eventKey="seven">
              <HeaderTitle title="Робочі зміни" src={SuportImg} alt='support' text='💡 Тут відображені відкритті і закритті зміни касирів. Також в цьому меню можна переглянути z-звіт 
'/>
              < TitleHeaderChanges />
              <ChengesTable />
            </Tab.Pane>
            <Tab.Pane eventKey="eigth">
              <HeaderTitle title="Товари" src={SuportImg} alt='support' text='💡 Тут ви можете створити список товарів/послуг, щоб швидко їх додавати до чеку в меню “Продаж”
'/>
              < TitleHeaderGoods text='Додати товар' />
              <GoodsTable data={dataGoods} />
            </Tab.Pane>

            <Tab.Pane eventKey="ten">
              <HeaderTitle title="Податкові ставки" src={SuportImg} alt='support' text='💡 В цьому меню налаштовуються податкові ставки, якщо ви платник ПДВ або акцизного податку. Платникам єдиного податку це меню не відображається
'/>
              < TitleHeaderTaxes text='+ Додати податкову ставку' />
              <TaxesTable data={dataTaxes} />
            </Tab.Pane>
            <Tab.Pane eventKey="eleven">
              <img src={GideS} alt='Інструкція' />
            </Tab.Pane>
            <Tab.Pane eventKey="twelve">
              <HeaderTitle title="Моя Організація" src={SuportImg} alt='support' />
              <ButtonDps text='Синхронізувати дані з ДПС' />
              <img src={CompanyS} alt='Компанія' style={{ height: 'auto' }} />

            </Tab.Pane>
            <Tab.Pane eventKey="thirteen">
            <HeaderTitle title="Звіти" src={SuportImg} alt='support' />
            </Tab.Pane>
            <Tab.Pane eventKey="fourteen">
            <HeaderTitle title="Оплата" src={SuportImg} alt='support' />
              <img src={Pay} alt='Оплата' />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container >
  );
}

