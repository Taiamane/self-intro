import React,{useState} from 'react';
import { Link,BrowserRouter, Routes, Route } from 'react-router-dom';

import './blogs.css'; 

function blogs_list(){

    return(
        <div className='main-content'>
            <h1 className='main-title'>Blogs</h1>
            <div className='intro-passage'>
                <p>ブログ一覧を掲載しています。</p>
            </div>
            
        </div>
    )

}

export default blogs_list;