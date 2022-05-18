import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employedetalis from './component/Employedetalis';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Employedetalis/>}/>
      
      
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
