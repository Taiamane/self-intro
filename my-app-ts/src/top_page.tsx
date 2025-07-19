import React from 'react';
import './top_page.css'; 

// Propsの型定義（もしPropsを受け取る場合）
interface TopPageProps {
  // 例: title?: string;
  // 例: description?: string;
}

const TopPage: React.FC<TopPageProps> = () => {
  return (
    <div> 
      <div className='top-main-massage'>
        <h1>Welcome.</h1>
        <p>このページは、Amaneの作品、ブログを掲載しているサイトです。</p>
      </div>
    </div>
  );
};

export default TopPage;