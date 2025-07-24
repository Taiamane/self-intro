import React from 'react';
import './top_page.css'; 

// Propsの型定義（もしPropsを受け取る場合）
interface TopPageProps {
  // 例: title?: string;
  // 例: description?: string;
}

const TopPage: React.FC<TopPageProps> = () => {
  return (
    <div className='main-content'> 
      <div className='top-main-massage'>
        <h1 className='main-title'>Welcome.</h1>
        <div className='intro-passage'>
          <p>このページは、Amaneの作品、ブログを掲載しているサイトです。</p>
        </div>
      </div>
    </div>
  );
};

export default TopPage;