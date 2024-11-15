
import './App.css';
import Home from './components/views/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Features from './components/views/Features';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
