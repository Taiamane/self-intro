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
      <h1>ようこそ！</h1>
      <p>このページは、あなたのウェブサイトのトップページです。</p>
      <p>ここに主要な情報や魅力的なコンテンツを追加していきましょう。</p>
      <section>
        <h2>主な特徴</h2>
        <ul>
          <li>特徴 1: ここにサービスの簡単な説明</li>
          <li>特徴 2: もう一つのメリットや機能</li>
          <li>特徴 3: ユーザーにとっての価値</li>
        </ul>
      </section>

      
      <div>
        <button onClick={() => alert('ボタンがクリックされました！')}>もっと詳しく見る</button>
      </div>

     
    </div>
  );
};

export default TopPage;