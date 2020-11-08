import React from 'react';
import Nav from 'react-bootstrap/Nav'

 export default function SideBarLink (props) {
    const {eventKey, content, title, titleClass} = props
    return (
          <Nav.Item className={titleClass} >
    <Nav.Link eventKey={eventKey}>        <div className='svgContainer'> {props.children}</div>
{content}{title}</Nav.Link>
    </ Nav.Item>
 
      )
}