import React,{useState} from 'react';
import './portfolio-detail.css'; 
import { useParams } from 'react-router-dom';

import worksData from './data/works';

interface WorkItem {
    id: number; // もしIDが文字列なら string に変更
    title: string;
    description?: string;
    imageSrc?: string;
    tags?: string[];
    technologies?: string[];
    developmentTime?: string;
    role?: string;
}

function PortfolioDetail(){
    const {id} = useParams<{id:string}>();    
    const numericId: number = parseInt(id, 10);
    const work = worksData.find(item => item.id === numericId);
    
    return(
        <div className='main-content'>
            <div>作品詳細をここに書きます</div>
            <div>{work.title}</div>
            
        </div>

        
        
    )
}

export default PortfolioDetail