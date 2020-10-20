import React from 'react';
import Tab from 'react-bootstrap/Tab'

 export default function TabContent (props) {
    const {alt, src, eventKeyContent} = props
    return (
        <Tab.Pane eventKey={eventKeyContent} >
            <img src={src} 
            alt={alt}  style={{ width: '22rem'}} style={{ height: '45rem'}}/>
            <Tab.Pane />
        </Tab.Pane>
      )
}