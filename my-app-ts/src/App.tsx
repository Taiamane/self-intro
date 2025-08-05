import './App.css';
import './header.css'
import './footer.css'
import React, { useState } from 'react';
import { Link,BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm';

import profilePic from'./picture/testicon.jpg'
import Main_workslist from './portfolio';
import blogs_list from './blogs';
import PortfolioDetail from './portfolio-detail';

import TopPage from './top_page';
import Another_links from './another-links';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <Link to="/" className='page_title' style={{ textDecoration: 'none', color: 'inherit' }}>         
          Amane-Portal
        </Link>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          
          <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Works</Link>
          <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
          <Link to="/another_links" onClick={() => setIsMenuOpen(false)}>Links</Link>

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
          <Route path='portfolioDetail/:id' Component={PortfolioDetail}/> {/* /:id*/}
          <Route path='another_links' Component={Another_links}/>
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
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              自己紹介文だよ
            </ReactMarkdown>
          </div>
        </div>
      <div className="copyright"> 2024 Amane</div>
      </footer>

      </BrowserRouter>
    </div>

    
  );
}

export default App;
