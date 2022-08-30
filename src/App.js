
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

import EmployerPcInfo from './components/EmployerPcInfo'
import AddEmployerPc from './components/AddEmployerPc';
import LandingPage from './components/LandingPage';

function App() {
  return (
    
    <div className="App">
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<AddEmployerPc/>} />
      <Route path="/" element={<EmployerPcInfo/>} />     
      </Routes>
      
    </div>
  );
}

export default App;
