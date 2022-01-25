import React, { useState } from "react";
import { Link } from "react-router-dom";
import './index.css'

const BasvuruNo = () => {
  return (
  <div className="main">
   <label className="text-basvuru">
    Başvuru Kodu:
    <input type="text" name="name" placeholder="Başvuru kodunuzu giriniz" />
  </label>
  <div className="btn-sorgu">
        <Link to="basvuru-no" onClick={(event) => {}}>
          <button type="submit">Kodu sorgulamak için tıklayın</button>
        </Link>
      </div>
  </div>
  );
}

export default BasvuruNo;
