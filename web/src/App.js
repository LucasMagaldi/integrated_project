import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Main from './pages/Main';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/home' element={<Main/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
