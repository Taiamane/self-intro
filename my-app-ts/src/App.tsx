import './App.css';
import './header.css'
import './footer.css'
import React, { useState } from 'react';
import { Link,BrowserRouter, Routes, Route } from 'react-router-dom';
import profilePic from'./picture/testpic.jpg'
import Main_workslist from './portfolio';
import blogs_list from './blogs';

import TopPage from './top_page';

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
          <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>PortForio</Link>
          <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
          <Link to="/another_links" onClick={() => setIsMenuOpen(false)}>Another</Link>
        </div>

        <button className="hamburger-menu" onClick={toggleMenu}>
        {/* ハンバーガーの三本線 */}
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <main>
        <Routes>
          <Route path='/' Component={TopPage}/>
          <Route path='/portfolio' Component={Main_workslist}/>
          <Route path='/blogs' Component={blogs_list}/>
        </Routes>
      </main>
        
      

      <footer className='App-footer'>
        <div className='picture-and-desc'>
          <img
          src={profilePic}
          alt="プロフィール画像"
          className='footer-content profileImage'
            />
          <div className='footer-content description'>
            <p>自己紹介文だよ</p>
            <p>自己紹介文二つ目だよ</p>
            <p>自己紹介文二つ目だよ</p>
            <p>自己紹介文二つ目だよ</p>
            <p>自己紹介文二つ目だよ</p>
            <p>自己紹介文二つ目だよ</p>
            <p>自己紹介文二つ目だよ</p>
          </div>
        </div>
      <div className="copyright"> 2024 Amane</div>
      </footer>

      </BrowserRouter>
    </div>

    
  );
}

export default App;
