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
  MDBTabsPane,
  MDBValidation,
  MDBValidationItem
            } from 'mdb-react-ui-kit'

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
          
          
{/* sing in google*/}
      <div className="text-start mb-2">
        <p>Sign in with:</p>
        
        <MDBBtn tag ='a' color='none' className="m-1 " size="lg" style={{color: '#1266f1'}}>
            <MDBIcon fab icon="google" className="sm" />
            
        </MDBBtn>
{/* or division*/}
      </div>
      <div className="divider col-10 align-items-center">
        <p className="text-center fw-bold mx-5 mb-0">Or</p>
      </div>
{/*data login*/} 
      <div className=" flex-column justify-content-center h-custom-2 w-75 pt-2">
        <h3 className="fw-normal mb-2 ps-2 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
        <MDBValidation>
        <MDBValidationItem  feedback = "campo requerido" invalid>

        <MDBInput 
            value={formValueLogin.email}
            name = 'email'
            wrapperClass = 'mb-4 '
            onChange={onChangeLogin} 
            id='formControlLg-email' 
            required
            type='email' 
            label='Email address' 
            size='sg'/>
        </MDBValidationItem>
        <MDBValidationItem  feedback = "campo requerido" invalid>
        <MDBInput 
            value = {formValueLogin.password}
            name = 'password'
            onChange={onChangeLogin}
            wrapperClass = 'mb-4'
            required 
            label='Password' 
            id='formControlLg-password' 
            type='password' 
            size='sg'/> 
        </MDBValidationItem>
        <div className="small d-flex justify-content-between mx-1 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefaul' label='Remember me' />
            <a href=''>Forgot password</a> 
        </div>
        <MDBBtn className="col-10 justify-content-center mb-0 px-4" size='lg'>Login</MDBBtn>
        </MDBValidation> 
      </div>
  
    </MDBTabsPane>

    
    <MDBTabsPane open = {justifyActive === 'tab2'}>
      <div className="text-start mb-1">
        <p>Sign in with:</p>
        
        <MDBIcon fab icon="google" size='6x' />
        <MDBBtn tag ='a' color='none' className="m-1 " size="lg" style={{color: '#1266f1'}}>
            
        </MDBBtn>
      </div>
      <div className="divider col-10 align-items-center my-1">
        <p className="text-center fw-bold mx-3 mb-0">Or</p>
      </div>
      <div className="d-flex col-10 flex-column justify-content-center h-custom-2 w-75 pt-2">
        <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
        <MDBValidation>
        <MDBValidationItem  className="fw-6" feedback = "campo requerido" invalid>
        <MDBInput 
            value={formValueRegister.email}
            name = 'email'
            onChange={onChangeRagister}
            required
            wrapperClass = 'mb-4 ' 
            label='email' 
            id='form1' 
            type='email' 
            size='lg'/>
        </MDBValidationItem>
        
        <MDBValidationItem small feedback = "campo requerido" invalid>
        <MDBInput 
            value={formValueRegister.username}
            name="username"
            onChange={onChangeRagister}
            required
            wrapperClass = 'mb-4' 
            label='Username' 
            id='form2' 
            type='text' 
            size='lg'/>
        </MDBValidationItem>

        <MDBValidationItem  feedback = "campo requerido" invalid>

        <MDBInput 
            value={formValueRegister.password}
            name="password"
            onChange={onChangeRagister}
            required
            wrapperClass = 'mb-4' 
            label='Password' 
            id='form4' 
            type='password' 
            size="lg"/>
        </MDBValidationItem>
          
          <div className="small d-flex justify-content-center fs-6 mt-3 mb-2">
            <MDBCheckbox className=""name='FlexCheck' id= 'flexCheckDefault' label='he leido todos los terminos y condiciones' required/>
          </div>
          <MDBBtn type="submit" className="mb-4 w-100">Sing up</MDBBtn>  

        </MDBValidation>
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