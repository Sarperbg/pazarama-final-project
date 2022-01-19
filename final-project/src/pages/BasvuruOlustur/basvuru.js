import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "../../components/TextField";
import "./index.css";

const Basvuru = () => {
  return (
    <div className="container">
      
      <div className="brand-box">
      <h1>Ticket Başvuru Formu</h1>
      <p>Lütfen Formdaki Bilgileri Eksiksiz Doldurunuz</p>
      </div>
      <div className="magic-form">
        <TextField />
      </div>
    </div>
  );
};

export default Basvuru;
