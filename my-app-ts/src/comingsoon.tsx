import React,{useState, useEffect} from 'react';
import { Link,BrowserRouter, Routes, Route } from 'react-router-dom';

import './comingsoon.css'; 

function Coming_soon(){

    const [isVisible, setIsVisible] = useState(false);
    
      useEffect(()=>{
        const timer = setTimeout(()=>{setIsVisible(true)}, 500) //setTimeoutを使うと、指定した時間遅らせて関数を実行できる
        return ()=> clearTimeout(timer);
      },[])

    return(
        <div className='main-content'>
            <div className={`coming-soon ${isVisible ? 'fade-in' : ''}`}>               
                <h1>Coming soon...</h1>
            </div>
            
        </div>
    )

}

export default Coming_soon;