import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Main from './pages/Main';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/home' element={<Main/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/application' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
