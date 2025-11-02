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
  const [formValueLogin, setFormValueLogin] = useState({
    email: '',
    password: ''
  })
  const [formValueRegister, setFormValueRegister] = useState({
    email: '',
    username: '',
    password: '',

  })
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return
    }   

    setJustifyActive(value)
  }

  const onChangeLogin = (e) => {
    setFormValueLogin({...formValueLogin,[e.target.name]: e.target.value})
  }
  const onChangeRagister = (e) => {
    setFormValueRegister({...formValueRegister, [e.target.name]: e.target.value})
  }

  return (
    <MDBContainer fluid className="p-3 my-5 d-flex flex-column w-50">
          <div className="d-flex aling-items-center justify-content-center ps-5 pt-5 pb-5">
            <img src="gato.png" className="img-fluid" style={{width:90, height:90}} />
            <span className="h3 fw-bold mb-2"> GD: Gato_Dev </span>
          </div>
      <MDBRow className="d-flex">
        <MDBCol xl='6' col="10" className=" ">
      
        <MDBTabs fill justify className="mb-3 d-flex flex-row justify-content-between">
          <MDBTabsItem>
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
          
      <Login formValue={formValueLogin} onChange = {onChangeLogin}/>          

  
    </MDBTabsPane>

    
    <MDBTabsPane open = {justifyActive === 'tab2'}>
     
      <Register formValue={formValueRegister} onChange = {onChangeRagister}/>
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