import React,{useState} from 'react';
import './portfolio.css'; 

function Main_workslist(){

    const allTags =  ['React', 'Python','C++', 'R']
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
    <div> 
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
    </div>
  );
};

export default Main_workslist;