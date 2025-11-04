
import React from "react"
import { useState } from "react"
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth, db } from '../firebase'
import {doc, setDoc} from "firebase/firestore"
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
    email: "",
    nombre: "",
    nacimiento: "",
    identificacion: "",
    password: "",
    passwordRe: "",
  })
  const [msg, setMsg] = useState("")
  const onChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value})
  }
  const handleRegister = async (e) => {
    e.preventDefault()
    if (!formValue.email || !formValue.nombre || !formValue.nacimiento || !formValue.identificacion || !formValue.password || !formValue.passwordRe){
      return setMsg("Campos incompletos")
    }
    if (!/^\d+$/.test(formValue.identificacion)){
      return setMsg('identificación: solo caracteres numericos')
    }

    if (formValue.password.length < 6) {
      return setMsg('Minimo 6 caracteres')
    }
    if (formValue.password !== formValue.passwordRe){
      return setMsg('Passwords no coinciden')
    }
    try {
      await createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
      const user = userCredential.user
      await setDoc(doc(db, "usuarios", user.uid),{
        nombre: formValue.nombre,
        nacimiento: formValue.nacimiento,
        identificacion : formValue.identificacion,
        email : formValue.email,
        creadoEn: new Date()
      })
      alert('Registro exitoso')
    } catch (error) {
      alert(error.message)
    }
  }

  const handleGoogleRegister = async () => {
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
<div className="scroll-container" style={{ maxHeight: "400px ", overflowY: "auto" }}>
  <div className="d-flex align-items-center text-start" >
    <p className="fw-bold mt-3 m-2">Sign in with:</p>

    <MDBBtn 
      floating
      tag ='a' 
      color='secodary'
      className="aling-items-center ms-3 mt-3 " 
      onClick={handleGoogleRegister}
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
      className="fw-bold d-flex  justify-content-center fw-normal mb-3  pb-3" 
      style={{letterSpacing: '1px'}}>
        Sign in
      </h4>
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
        
        <MDBInput 
          value={formValue.nombre}
          name="nombre"
          onChange={onChange}
          required
          wrapperClass = 'mb-4' 
          label='Nombre' 
          id='form2' 
          type='text' 
          size='lg'/>
      </MDBValidationItem>
      <MDBValidationItem feedback = "campo requerido" invalid>
        
        <MDBInput 
          value={formValue.nacimiento}
          name="nacimiento"
          onChange={onChange}
          required
          wrapperClass = 'mb-4' 
          label='Fecha de nacimiento' 
          id='form3' 
          type='date' 
          size='lg'/>
      </MDBValidationItem>
      <MDBValidationItem feedback = "campo requerido" invalid>
        
        <MDBInput 
          value={formValue.identificacion}
          name="identificacion"
          onChange={onChange}
          required
          wrapperClass = 'mb-4' 
          label='identificacion' 
          id='form4' 
          type='text' 
          size='lg'/>
      </MDBValidationItem>
      <MDBValidationItem feedback = "campo requerido" invalid>
        
        <MDBInput 
          value={formValue.password}
          name="password"
          onChange={onChange}
          required
          wrapperClass = 'mb-4' 
          label='Password' 
          id='form5' 
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
          id='form6' 
          type='password' 
          size="lg"/>
      </MDBValidationItem>
        <div className="small d-flex justify-content-center fs-6 mt-3 mb-2">
          <MDBCheckbox 
            className=""
            name='FlexCheck' 
            id= 'flexCheckDefault' 
            label={
              <h6>
              He leído todos los {''}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{color: '#007bff', textDecoration:'underline', pointerEvents:'none'}}
                >
                  términos y condiciones
                </a>
                </h6>
             }
            required
            />
        </div>
      <MDBBtn type="submit" className="mb-4 w-100">Sing up</MDBBtn>  
    </MDBValidation>
  </div>
</div>
  );
}
