import React,{useState} from 'react';
import './portfolio-detail.css'; 
import { useParams } from 'react-router-dom';

import worksData, {Work} from './data/works';

function PortfolioDetail(){
    const {id} = useParams<{id:string}>();        
    const work  = worksData.find(item => item.id === id);
    
    if(work == undefined){
        console.error('item does not exist')
        return;
    }
    
    return(
        <div className='main-content portfolio-detail'>

            <div className='portfolio-info'>
                <h1>{work.title}</h1> {/* タイトルを一番上に表示 */}
                <p><strong>プロジェクトタイプ:</strong> {work.projectType}</p>
                <p><strong>制作期間:</strong> {work.developmentTime}</p>
                <p><strong>タグ:</strong> {work.tags.join(', ')}</p>
                {work.role && <p><strong>担当した役割:</strong> {work.role}</p>}
                <h2>説明</h2>
                <p>{work.description}</p>
            </div>
            
            <div className="portfolio-photos">                   
                <img  src={work.imageUrl}  style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
            </div>


            
            
        </div>               
    )
}

export default PortfolioDetail