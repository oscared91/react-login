import React from "react"
import {
  MDBContainer,
  MDBCol, 
  MDBRow, 
  MDBBtn, 
  MDBIcon, 
  MDBInput, 
  MDBCheckbox,
  MDBCard 
            } from 'mdb-react-ui-kit'

function App () {
  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol xl='6' col="10" className=" d-flex">
          <div className="d-flex flex-row ps-5 pt-5">
            <img src="gato.png" className="img-fluid" style={{width:120, height:120}} />
            <span className="h2 fw-bold mb-2"> GD: Gato_Dev </span>
          </div>

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
            <p className="small fw bold mt-2 pt-1 mb-2">Don't have an account? <a href='' className="link-danger">Register</a></p>
            <div className="divider col-10 align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>
            <MDBBtn className="col-10 mb-4 " size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="google" className="mx-2" />
            Continue with google
          </MDBBtn>
          </div>
        </MDBCol>
        
        <MDBCol xl="6" className='d-None d-sm-block px-0'>
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