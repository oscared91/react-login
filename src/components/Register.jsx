
import React from "react"
import {
  MDBBtn,
  MDBIcon,
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBCheckbox 
} from "mdb-react-ui-kit"

export default function Register({formValue, onChange}){
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
    <MDBValidation>
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
        value={formValue.username}
        name="username"
        onChange={onChange}
        required
        wrapperClass = 'mb-4' 
        label='Username' 
        id='form2' 
        type='text' 
        size='lg'/>
      </MDBValidationItem>

      <MDBValidationItem  feedback = "campo requerido" invalid>

        <MDBInput 
          value={formValue.password}
          name="password"
          onChange={onChange}
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
</>
  );
}
