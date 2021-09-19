import '../../css/Menu.css';

import {MenuElements} from './MenuElements';

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

export default function Menu(props){
    return(
        <div className={props.menu ? 'Menu' : 'Menu_inactive'}>
            {props.menu ? render_elements() : null }
           
        </div>
    )
}