import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
 import Tab from 'react-bootstrap/Tab'
 import '../index.css';
 import {ReactComponent as Sale} from '../assets/image/sael.svg'
 import {ReactComponent as ImgLogo} from '../assets/image/qwerty1.svg'
 import {ReactComponent as Return} from '../assets/image/return.svg'
 import {ReactComponent as Kashier} from '../assets/image/kashier.svg'
 import {ReactComponent as Kass} from '../assets/image/kass.svg'
 import {ReactComponent as Outlet} from '../assets/image/outlet.svg'
 import {ReactComponent as Check} from '../assets/image/archivCheck.svg'
 import {ReactComponent as Chenges} from '../assets/image/chenges.svg'
 import {ReactComponent as Goods} from '../assets/image/goods.svg'
 import {ReactComponent as Company} from '../assets/image/company.svg'
 import {ReactComponent as Taxes} from '../assets/image/taxes.svg'
 import {ReactComponent as Gide} from '../assets/image/gide.svg'
 import {ReactComponent as LogoCheckbox} from '../assets/image/f1be010.svg'
 import  SaleS from '../assets/image/saleS.png'
 import  ReturS from '../assets/image/returnS.png'
 import  KashierS from '../assets/image/kashierS.png'
import SideBarLink from '../components/SideBarLink'
import TabContent from '../components/TabContent'
import KassS from '../assets/image/kassS.png'
import OutletS from '../assets/image/outletS.png'
import CheckS from '../assets/image/checkS.png'
import ChengesS from '../assets/image/changesS.png'
import GoodsS from '../assets/image/goodsS.png'
import CompanyS from '../assets/image/companyS.png'
import TaxesS from '../assets/image/taxS.png'
import GideS from '../assets/image/gideS.png'

export default function Portal() {
 
  return (
     <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={2} className="sidebar">
      <Nav className="flex-column navItem">
      <SideBarLink titleClass='navItem1 logoCheck'><LogoCheckbox/><ImgLogo className='checkbox'/></ SideBarLink>
      <SideBarLink title='МОЯ КАСА' titleClass='navItem1 navTitle'></ SideBarLink>
      <SideBarLink eventKey='first' content='Продажа' titleClass='navItem1'><Sale/></ SideBarLink>
      <SideBarLink eventKey='second' content='Повернення' titleClass='navItem1'><Return/></ SideBarLink>
      <div className = "vertical"></div> 
      <SideBarLink title='УПРАВЛІННЯ КАСАМИ' titleClass='navItem1 navTitle'></ SideBarLink>
      <SideBarLink eventKey='third' content='Касири' titleClass='navItem1'><Kashier/></ SideBarLink>
      <SideBarLink eventKey='four' content='Каси' titleClass='navItem1'><Kass/></ SideBarLink>
      <SideBarLink eventKey='five' content='Торгові точки' titleClass='navItem1'><Outlet/></ SideBarLink>
      <SideBarLink eventKey='six' content='Архів чеків' titleClass='navItem1'><Check/></ SideBarLink>
      <SideBarLink eventKey='seven' content='Робочі зміни' titleClass='navItem1'><Chenges/></ SideBarLink>
      <SideBarLink eventKey='eigth' content='Товари' titleClass='navItem1'><Goods/></ SideBarLink>
       <div className = "vertical"></div> 
      <SideBarLink title='МОЯ ОРГАНІЗАЦІЯ' titleClass='navItem1 navTitle'></ SideBarLink>
      <SideBarLink eventKey='nine' content='Дані Організації' titleClass='navItem1'><Company/></ SideBarLink>      
      <SideBarLink eventKey='ten' content='Податкові ставки' titleClass='navItem1'><Taxes/></ SideBarLink>      
      <div className = "vertical"></div> 
      <SideBarLink eventKey='eleven' content='Інструкції' titleClass='navItem1'><Gide/></ SideBarLink>      
      </Nav>
    </Col>
    <Col className="leftBar" >
      <Tab.Content>   
      <TabContent src ={SaleS}  alt='Продажа' eventKeyContent='first'/>      
      <TabContent src ={ReturS}  alt='Повернення' eventKeyContent='second'/>     
      <TabContent src ={KashierS}  alt='Касири' eventKeyContent='third'/> 
      <TabContent src ={KassS}  alt='Каси' eventKeyContent='four'/> 
      <TabContent src ={OutletS}  alt='TT' eventKeyContent='five'/>   
      <TabContent src ={CheckS}  alt='Чеки' eventKeyContent='six'/> 
      <TabContent src ={ChengesS}  alt='Зміни' eventKeyContent='seven'/>   
      <TabContent src ={GoodsS}  alt='Товари' eventKeyContent='eigth'/>  
      <TabContent src ={CompanyS}  alt='Компанія' eventKeyContent='nine'/> 
      <TabContent src ={TaxesS}  alt='Податки' eventKeyContent='ten'/>
      <TabContent src ={GideS}  alt='Інструкція' eventKeyContent='eleven'/>   
   
  
 


  
  
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
    );
}

 