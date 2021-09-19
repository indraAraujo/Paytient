import React, {useState} from 'react';
import '../../css/Menu.css';

import {MenuElements} from './MenuElements';

const sidebar=true;

const render_elements =() =>{
    return(
        <ul className="Menu_map">
        {MenuElements.map((val, key)=>{
            return(
                <li key={key} className="row">
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
                </li>
            );
        })}
    </ul>
    )
}

export default function Menu(){
    return(
        <div className={sidebar ? 'Menu' : 'Menu_inactive'}>
            {sidebar ? render_elements() : null }
           
        </div>
    )
}