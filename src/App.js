import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Mypage from './component/Mypage';
import NotFound from './component/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        
        <nav>
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to ="/about">About</Link>
            </li>
            <li>
              <Link to ="/contact">Contact</Link>
            </li>
            <li>
              <Link to ="/mypage">Mypage</Link>
            </li>
            <li>
              <Link to ="/없는주소">NotFound</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


