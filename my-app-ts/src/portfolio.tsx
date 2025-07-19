import React,{useState} from 'react';
import { Link,BrowserRouter, Routes, Route } from 'react-router-dom';

import './portfolio.css'; 

import worksData from './data/works';

function Main_workslist(){

    const allTags =  ['React', 'Python','C++', 'R']
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const filteredWorks = selectedTags.length > 0
    ? worksData.filter(work => work.tags.some(tag => selectedTags.includes(tag)))
    : worksData;

    const handleTagChange = (event:any) => {
        const tagName = event.target.value;
            if (event.target.checked) {
            // チェックされたらタグを追加
            setSelectedTags([selectedTags, tagName]);
            } else {
            // チェックが外れたらタグを削除
            setSelectedTags(selectedTags.filter(tag => tag !== tagName));
            }
    };
  return (
    <div className='main-content'> 
      <div className='works_list'>
        <h1>Works</h1>
        <p>作品一覧のページです。</p>
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
            <Link to={`/works/${work.id}`} key={work.id} className="work_card">
              <img src={work.imageUrl} alt={work.title} className="work_image" />
              <div className="work_overlay">
                <h3 className="work_title">{work.title}</h3>
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default Main_workslist;