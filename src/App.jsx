import React, { useState } from "react"
import {
  MDBContainer,
  MDBCol, 
  MDBRow, 
  MDBBtn, 
  MDBIcon, 
  MDBInput, 
  MDBCheckbox,
  MDBCard,
  MDBTabs, 
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
            } from 'mdb-react-ui-kit'

function App () {
  
  const [justifyActive, setJustifyActive] = useState('tab1')
  
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return
    }   

    setJustifyActive(value)
  }

  return (
    <MDBContainer fluid className="p-3 my-5 d-flex flex-column w-50">
          <div className="d-flex aling-items-center justify-content-center ps-5 pt-5 pb-5">
            <img src="gato.png" className="img-fluid" style={{width:90, height:90}} />
            <span className="h3 fw-bold mb-2"> GD: Gato_Dev </span>
          </div>
      <MDBRow>
        <MDBCol xl='6' col="10" className=" ">
      
        <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between">
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
          
          
{/* sing in google*/}
      <div className="text-center mb-3">
        <p>Sign in with:</p>
        
        <MDBBtn tag ='a' color='none' className="m-1 " size="lg" style={{color: '#1266f1'}}>
            <MDBIcon fab icon="google" className="sm" />
            
        </MDBBtn>
{/* or division*/}
      </div>
      <div className="divider col-10 align-items-center my-4">
        <p className="text-center fw-bold mx-3 mb-0">OR</p>
      </div>
{/*data login*/} 
      <div className="d-flex col-10 flex-column justify-content-center h-custom-2 w-75 pt-4">
        <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
        <MDBInput 
            wrapperClass = 'mb-4 ' 
            label='Email address' 
            id='formControlLg-email' 
            type='email' 
            size='lg'/>
        <MDBInput 
            wrapperClass = 'mb-4' 
            label='Password' 
            id='formControlLg-password' 
            type='password' 
            size='lg'/> 
        <div className="d-flex justify-content-between mx-1 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefaul' label='Remember me' />
            <a href=''>Forgot password</a> 
        </div>
        <MDBBtn className="col-10 justify-content-center mb-0 px-4" size='lg'>Login</MDBBtn>
        <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href='' className="link-danger">Register</a></p>
      </div>
  
    </MDBTabsPane>

    
    <MDBTabsPane open = {justifyActive === 'tab2'}>
      <div className="text-center mb-3">
        <p>Sign in with:</p>
        
        <MDBBtn tag ='a' color='none' className="m-1 " size="lg" style={{color: '#1266f1'}}>
            <MDBIcon fab icon="google" className="sm" />
            
        </MDBBtn>
      </div>
      <div className="divider col-10 align-items-center my-4">
        <p className="text-center fw-bold mx-3 mb-0">OR</p>
      </div>
      <div className="d-flex col-10 flex-column justify-content-center h-custom-2 w-75 pt-4">
        <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
        <MDBInput 
            wrapperClass = 'mb-4 ' 
            label='Name' 
            id='form1' 
            type='text' 
            size='lg'/>
        <MDBInput 
            wrapperClass = 'mb-4' 
            label='Username' 
            id='form2' 
            type='text' 
            size='lg'/>
        <MDBInput 
            wrapperClass = 'mb-4' 
            label='email' 
            id='form3' 
            type='email' 
            size='lg'/>
        <MDBInput 
            wrapperClass = 'mb-4' 
            label='Password' 
            id='form4' 
            type='password' 
            size='lg'/>
          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox name='FlexCheck' id= 'flexCheckDefault' label='he leido todos los terminos y condiciones'/>
          </div>
          <MDBBtn className="mb-4 w-100">Sing up</MDBBtn>  

        </div>

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