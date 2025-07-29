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
                {work.technologiesUsed && <p><strong>使用技術:</strong> {work.technologiesUsed.join(', ')}</p>}
                {work.role && <p><strong>担当した役割:</strong> {work.role}</p>}
                <p>{work.description}</p>
            </div>
            
            <div className="portfolio-photos">                   
                {work.imageUrl && work.imageUrl.map((url, index) => (
            <img key={index} src={url} alt={`${work.title} ${index + 1}`} />
            ))}
            </div>                       
        </div>               
    )
}

export default PortfolioDetail