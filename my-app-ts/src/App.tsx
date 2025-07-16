import './App.css';
import './header.css'
import React, { useState } from 'react';
import { Link,BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <p className='page_title'>
          Amane-Portal
        </p>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Top</Link>
          <Link to="/howtouse" onClick={() => setIsMenuOpen(false)}>PortForio</Link>
          <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Another</Link>
        </div>

        <button className="hamburger-menu" onClick={toggleMenu}>
        {/* ハンバーガーの三本線 */}
          <span></span>
          <span></span>
          <span></span>
        </button>


      </header>


      
        <Routes>
        
        </Routes>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
