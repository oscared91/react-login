import React from "react"
import { signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase'
import { useState } from "react"
import {
  MDBBtn,
  MDBIcon,
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBCheckbox, 
} from "mdb-react-ui-kit"
export default function Login(){
  
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })
  const onChange = (e) => {
    setFormValue({...formValue,[e.target.name]: e.target.value})
  }

  const hadnleLogin = async (e) =>{
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, formValue.email, formValue.password)
      setMsg('Login successfull')
      } catch (error){
        setMsg(error.message)
      }
  }

  return(

    <>
      <div className="text-start mb-2">
        <p>Sign in with:</p>
          <MDBBtn tag ='a' color='none' className="m-1 " size="lg" style={{color: '#1266f1'}}>
            <MDBIcon fab icon="google" className="sm" />
          </MDBBtn>
        </div>
      <div className="divider col-10 align-items-center">
        <p className="text-center fw-bold mx-5 mb-0">Or</p>
      </div> 
        <div className=" flex-column justify-content-center h-custom-2 w-75 pt-2">
          <h3 className="fw-normal mb-2 ps-2 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
        <MDBValidation onSubmit={hadnleLogin}>
          <MDBValidationItem  feedback = "campo requerido" invalid>

            <MDBInput 
              value={formValue.email}
              name = 'email'
              wrapperClass = 'mb-4 '
              onChange={onChange} 
              id='formControlLg-email' 
              required
              type='email' 
              label='Email address' 
              size='sg'/>
          </MDBValidationItem>
        <MDBValidationItem  feedback = "campo requerido" invalid>
          <MDBInput 
            value = {formValue.password}
            name = 'password'
            onChange={onChange}
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
    </>
  );
  
}