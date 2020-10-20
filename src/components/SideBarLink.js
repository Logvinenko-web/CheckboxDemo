import React from 'react';
import Nav from 'react-bootstrap/Nav'

 export default function SideBarLink (props) {
    const {eventKey, content, title, titleClass} = props
    return (
        <Nav.Item className={titleClass} >
         {props.children}
    <Nav.Link eventKey={eventKey}>{content}{title}</Nav.Link>
    </ Nav.Item>
      )
}