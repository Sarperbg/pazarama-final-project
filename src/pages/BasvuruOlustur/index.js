import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../components/TextField";
import { v4 as uuidv4 } from 'uuid';
import "./index.css";

const BasvuruOlustur = () => {
  return (
    <div className="container">
      
      <div className="main-box">
      <h1>Ticket Başvuru Formu</h1>
      <p>Lütfen Formdaki Bilgileri Eksiksiz Doldurunuz</p>
      </div>
      <div className="main-form">
        <TextField />
        
      </div>
    
    </div>
  );
};

export default BasvuruOlustur;
