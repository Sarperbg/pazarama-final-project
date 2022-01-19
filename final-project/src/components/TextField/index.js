import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("İsim boş bırakılamaz"),
  surname: Yup.string().required("Soyisim boş bırakılamaz"),
  age: Yup.number().required("Yaş boş bırakılamaz"),
  idnumber: Yup.number().required("Kimlik numarası boş bırakılamaz"),
  adress: Yup.string().required("Adres alanı boş bırakılamaz"),
});
const TextField = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        age: "",
        idnumber: "",
        reason: "",
        adress: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
        }, 2000);
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleReset,
        values,
        errors,
        dirty,
        isSubmitting,
        touched,
      }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Lütfen Adınızı Giriniz</label>
          <br />

          <input
            type="text"
            name="name"
            placeholder="Adiniz"
            onChange={handleChange}
            value={values.name}
          />
          {errors.name && touched.name && (
            <div className="input-feedback">{errors.name}</div>
          )}
          <br />
          <label htmlFor="surname">Lütfen Soyadınızı Giriniz</label>
          <br />
          <input
            type="text"
            name="surname"
            placeholder="Soyadiniz"
            onChange={handleChange}
            value={values.surname}
          />
          {errors.surname && touched.surname && (
            <div className="input-feedback">{errors.surname}</div>
          )}
          <br />
          <label htmlFor="age">Lütfen Yaşınızı Giriniz</label>
          <br />
          <input
            type="text"
            name="age"
            placeholder="Yaşınız"
            onChange={handleChange}
            value={values.age}
          />
          {errors.age && touched.age && (
            <div className="input-feedback">{errors.age}</div>
          )}
          <br />
          <label htmlFor="idnumber">Lütfen Kimlik Numaranızı Giriniz</label>
          <br />
          <input
            type="text"
            name="idnumber"
            placeholder="TC NO"
            onChange={handleChange}
            value={values.idnumber}
          />
          {errors.idnumber && touched.idnumber && (
            <div className="input-feedback">{errors.idnumber}</div>
          )}
          <br />
          <label htmlFor="reason">Lütfen Başvuru sebebinizi yazınız</label>
          <br />
          <textarea
            type="text"
            name="reason"
            placeholder="Başvuru sebebiniz"
            onChange={handleChange}
            value={values.reason}
          />
          {errors.reason && touched.reason && (
            <div className="input-feedback">{errors.reason}</div>
          )}
          <br />
          <label htmlFor="adress">Lütfen Adres Bilgisini Giriniz</label>
          <br />
          <textarea
            type="text"
            name="adress"
            placeholder="Adresiniz"
            onChange={handleChange}
            value={values.adress}
          />
          {errors.adress && touched.adress && (
            <div className="input-feedback">{errors.adress}</div>
          )}
          <br />
          <div className="checkbox topMargin">
            <input
              id="agree"
              type="checkbox"
              value={values.agree}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="agree" className="checkbox-label">
            Sözleşmeyi okudum kabul ediyorum..
          </label>
          <br />
          <button type="submit" disabled={!dirty || isSubmitting}>
            Kaydol
          </button>
        </form>
      )}
    </Formik>
  );
};

export default TextField;
