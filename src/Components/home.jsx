import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';

import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Home() {

  // const container = document.querySelector('.container');
  // container.style.backgroundColor = 'blue';

  const [backgroundColor, setBackgroundColor] = useState("")

  const changeFormColor = (event) => {
    var selectedColor = document.getElementById('color').value;
    event.preventDefault();
    setBackgroundColor(selectedColor)
  }
  return (
    <div>
      <Navbar />
      <h1> Color Picker </h1>


    <form className='container' style={{backgroundColor}}>
      <h3 style={{color:"rgb(0,100,200)",fontFamily:"roboto",fontSize:"20px",marginBottom:"20px"}}> Select the color and change the background of the form </h3>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Last name' />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' />
      <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' />

      <label className='form-label' for="color"> color picker </label>
      <input type="color" className='form-control d-flex justify-content-center mb-4' id='color' /  >
      <MDBBtn onClick={changeFormColor} className='mb-4' block>
        Change form Color
      </MDBBtn>

      <div className='text-center'>
        <p>
          Not a member? <a href='#!'>Register</a>
        </p>
        <p>or sign up with:</p>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </div>
    </form>
    </div>
  );
}