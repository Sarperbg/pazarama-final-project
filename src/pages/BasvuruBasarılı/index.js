import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const BasvuruBasarılı = () => {
  return (
    <div className="main">
      <h1>Formu eksiksiz doldurduğunuz için teşekkürler!</h1>
     
      <div className="btn-sorgu">
        <Link to="basvuru-sorgu" onClick={(event) => {}}>
          <button type="submit">Kodu sorgulamak için tıklayın</button>
        </Link>
      </div>
    </div>
  );
};

export default BasvuruBasarılı;
