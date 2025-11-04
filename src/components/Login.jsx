import React from "react"
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth'
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

  
  const hadnleLogin = async (e) => {
    e.preventDefault()
    if (!formValue.email || !formValue.password){
      return setMsg("Campos incompletos")
    }
    try {
      await signInWithEmailAndPassword(auth, formValue.email, formValue.password)
      alert("Inicio de sesión exitoso")
      
    } catch (error) {
      alert("Error: " + error.message)
    }
  }

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user;
      console.log("Usuario registrado:", user);
      // Aquí puedes guardar datos extra en Firestore si lo deseas
    } catch (error) {
      console.error("Error al registrarse con Google:", error.message)
    }
  }






  return(
    <div>
      <div className="fw-bold d-flex align-items-center text-start" >
        <p className="mt-3 m-2">Login with:</p>
           <MDBBtn 
      floating
      tag ='a' 
      color='secodary'
      className="aling-items-center ms-3 mt-3 " 
      onClick={handleGoogleLogin}
      size="lg" 
      style={{boxShadow: '0 0 15px 2px rgba(75, 208, 208, 1)'}}
    >
      <img src='google.png' alt="Google icon" style={{height: '90%',width:'auto'}}/>

    </MDBBtn>
       </div>
  <div className="divider col-10 align-items-center my-1">
    <hr className="hr hr-blurry"/>
    <p className="text-center fw-bold mx-3 mb-0">Or</p>
  </div>
  <div className="d-flex col-10 flex-column justify-content-center h-custom-2 w-75 pt-2">
    <h4 
      className="fw-bold d-flex  justify-content-center fw-normal mb-3 pb-3" 
      style={{letterSpacing: '1px'}}>
        Log in
    </h4> 
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
    </div>
  );
  
}