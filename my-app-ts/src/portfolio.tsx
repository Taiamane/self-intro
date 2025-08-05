import React,{useState} from 'react';
import { Link,BrowserRouter, Routes, Route } from 'react-router-dom';

import './portfolio.css'; 

import worksData from './data/works';

function Main_workslist(){

    const allTags =  ['React', 'Python','C++', 'R'] //調整箇所
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const filteredWorks = selectedTags.length > 0
    ? worksData.filter(work => work.tags.some(tag => selectedTags.includes(tag)))
    : worksData; //選んだタグを1つでも含むものを表示する。とりまこれで

    const handleTagChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const tagName = event.target.value;
            if (event.target.checked) {
            // チェックされたらタグを追加
             setSelectedTags(prevTags => [...prevTags, tagName])
            } else {
            // チェックが外れたらタグを削除
            setSelectedTags(selectedTags.filter(tag => tag !== tagName));
            
            }
    };
  return (
    <div className='main-content'> 
      <div className='works_list'>
        <h1 className='main-title'>Works</h1>
        <p className='intro-passage'>作品一覧のページです。</p>
        {allTags.map(tag => (
            <label key={tag} className="tag_checkbox">
              <input
                type="checkbox"
                value={tag}
                checked={selectedTags.includes(tag)}
                onChange={handleTagChange}
              />
              {tag}
            </label>
          ))}
      </div>
      <div className="works_grid">
          {filteredWorks.map(work => (
            <div>
            <Link to={`/portfolioDetail/${work.id}`} key={work.id} className="work_card">
              <img src={work.imageUrl[0]} alt={work.title} className="work_image" />
              
            </Link>
            <h3>{work.title}</h3>
            <div>{work.descriptionEasy}</div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Main_workslist;