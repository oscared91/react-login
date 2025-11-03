
import React from "react"
import { useState } from "react"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase'
import {
  MDBBtn,
  MDBIcon,
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBCheckbox, 
  MDBTooltip
} from "mdb-react-ui-kit"

 
export default function Register(){
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    passwordRe: '',
  })
  const [msg, setMsg] = useState("")
  const onChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value})
  }
  const handleRegister = async (e) => {
    e.preventDefault()
    if (!formValue.email || !formValue.password || !formValue.passwordRe){
      return setMsg("Campo imcompleto")
    }

    if (formValue.password.length < 6) {
      return setMsg('Minimo 6 caracteres')
    }
    if (formValue.password !== formValue.passwordRe){
      return setMsg('Passwords no coinciden')
    }

    

    try {
      await createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
      setMsg('Registro exitoso')
    } catch (error) {
      setMsg(error.message)
    }
  }

  return(
<>
  <div className="text-start mb-1">
    <p>Sign in with:</p>

    <MDBIcon fab icon="google" size='6x' />
    <MDBBtn 
      tag ='a' 
      color='none' 
      className="m-1 " 
      size="lg" 
      style={{color: '#1266f1'}}>
    </MDBBtn>
  </div>
  <div className="divider col-10 align-items-center my-1">
    <p className="text-center fw-bold mx-3 mb-0">Or</p>
  </div>
  <div className="d-flex col-10 flex-column justify-content-center h-custom-2 w-75 pt-2">
    <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
    <MDBValidation onSubmit={handleRegister} >
      {msg && (
        <div className='small text-danger text-center mb-3 fw-6'>{msg}</div>
      )}
      <MDBValidationItem  className="fw-6" feedback = "campo requerido" invalid>
        <MDBInput 
          value={formValue.email}
          name = 'email'
          onChange={onChange}
          required
          wrapperClass = 'mb-4 ' 
          label='email' 
          id='form1' 
          type='email' 
          size='lg'/>
      </MDBValidationItem>
      <MDBValidationItem feedback = "campo requerido" invalid>
        <label>

        <MDBTooltip tag="span" title="Mínimo 6 caracteres">
          <MDBIcon fas icon="question-circle" className="ms-2 text-info"/>
        </MDBTooltip>
        </label>
        <MDBInput 
        value={formValue.password}
        name="password"
        onChange={onChange}
        required
        wrapperClass = 'mb-4' 
        label='Password' 
        id='form2' 
        type='password' 
        size='lg'/>
      </MDBValidationItem>
      <MDBValidationItem  feedback ="campo requerido" invalid>
        <MDBInput 
          value={formValue.passwordRe}
          name="passwordRe"
          onChange={onChange}
          required
          wrapperClass = 'mb-4' 
          label='Confirm password' 
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
</>
  );
}
