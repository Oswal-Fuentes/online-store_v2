import React from 'react';
import Navbar from '../Navigation/NavL'
import Carousel from '../Carousel/Carousel'
import Card from '../Card/Card'

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
//import './index.css';

const Landing = () => (
  <div>
    <Navbar></Navbar>
    <Carousel></Carousel>
    <br></br>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4">
          <Card></Card>
        </MDBCol>
        <MDBCol md="4">
          <Card></Card>
        </MDBCol>
        <MDBCol md="4">
          <Card></Card>
        </MDBCol>
      </MDBRow>
      <br></br>
      <MDBRow>
        <MDBCol md="4">
          <Card></Card>
        </MDBCol>
        <MDBCol md="4">
          <Card></Card>
        </MDBCol>
        <MDBCol md="4">
          <Card></Card>
        </MDBCol>
      </MDBRow>
      <br></br>
      <MDBRow>
        <MDBCol md="4">
          <Card></Card>
        </MDBCol>
        <MDBCol md="4">
          <Card></Card>
        </MDBCol>
        <MDBCol md="4">
          <Card></Card>
        </MDBCol>
      </MDBRow>
      <br></br>
      <MDBRow>
        <MDBCol md="4">
          <Card></Card>
        </MDBCol>
        <MDBCol md="4">
          <Card></Card>
        </MDBCol>
        <MDBCol md="4">
          <Card></Card>
        </MDBCol>
      </MDBRow>
      
      


    </MDBContainer>
  </div>
);

export default Landing;