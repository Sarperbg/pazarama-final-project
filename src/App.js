import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useFormik } from 'formik';
import './App.css';
import BasvuruOlustur from './pages/BasvuruOlustur/index';
import BasvuruBasarılı from './pages/BasvuruBasarılı/index';
import BasvuruNo from './pages/BasvuruNo/index';
function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route  path="/"element={<BasvuruOlustur/>}/>
          <Route  path="/basvuru-basarili" element={<BasvuruBasarılı/>}/>
          <Route  path="/basvuru-basarili/basvuru-sorgu" element={<BasvuruNo/>}/>


        </Routes>
    </Router>
  </div>
  );
}

export default App;
