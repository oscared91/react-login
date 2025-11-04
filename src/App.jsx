import React, { useState } from "react"
import {
  MDBContainer,
  MDBCol, 
  MDBRow, 
  MDBTabs, 
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  } from 'mdb-react-ui-kit'
import Login from "./components/Login"
import Register from "./components/Register"

function App () {  
  
  const [justifyActive, setJustifyActive] = useState('tab1')
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return
    }   
    setJustifyActive(value)
  }
  return (
    <MDBContainer breakpoint="lg" fluid className=" d-flex flex-column w-50">
          <div className="d-flex aling-items-center justify-content-center" >
            <img src="gato.png" className="img-fluid" style={{width:150, height:'auto'}} />
            <span 
              className="d-flex align-items-center justify-content-center px-5 my-5 "  
              style={{ 
                backgroundColor:'#0b0d0bff', 
                color: '#c6eef1ff',
                fontFamily: 'Consolas, monospace',
                fontSize: '16px',
                boxShadow: '0 0 20px 3px rgba(116, 199, 227, 1)' }}>
               !DD:\\ !Dog_Dev: _ </span>
          </div>
          <hr className="hr hr-blurry"/>
      <MDBRow className="d-flex">
        <MDBCol xl='6' col="10" className="">
      
        <MDBTabs fill justify className="mb-3 d-flex flex-row justify-content-between">
          <MDBTabsItem className="">
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
              Login
            </MDBTabsLink>
          </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={()=> handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
      
      <MDBTabsPane open = {justifyActive === 'tab1'}>
      <Login />          
    </MDBTabsPane>
    <MDBTabsPane open = {justifyActive === 'tab2'}>
      <Register />
      </MDBTabsPane>
    </MDBTabsContent>
    </MDBCol>
    <MDBCol xl="6" className='d-none d-sm-block px-0'>
      <img  src ="tuli.jpg" 
        className="w-100" 
        alt="Login image"
        style={{objectFit: 'cover', objectPosition: 'left'}}/>
    </MDBCol>
    </MDBRow>
  </MDBContainer>
      )
    }
export default App