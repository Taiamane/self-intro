import React,{useEffect, useState} from 'react';
import './top_page.css'; 

function TopPage(){
  const [isVisible, setIsVisible] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(()=>{setIsVisible(true)}, 500) //setTimeoutを使うと、指定した時間遅らせて関数を実行できる
    return ()=> clearTimeout(timer);
  },[])

  return (
    <div className='main-content'> 
      <div className={`top-main-message ${isVisible ? 'fade-in' : ''}`}>
        <h1 className='main-title'>Welcome.</h1>
        <div className='intro-passage'>
          <p>このページは、Amaneの作品、ブログを掲載しているサイトです。</p>
        </div>
      </div>
    </div>
  );
};

export default TopPage;