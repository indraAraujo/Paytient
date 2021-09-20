import '../../css/Menu.css';
import { Link } from 'react-router-dom';
import {MenuElements} from './MenuElements';

const render_elements =(page) =>{
    return(
        <ul className="Menu_map">
        {MenuElements.map((val, key)=>{
            return(
                <li key={key} className="row">
                    <div id={page==key ? 'icon_active' : 'icon_inactive'}>{val.icon}</div>
                    <div id={page==key ? 'title_active' : 'title_inactive'}>{val.title}</div>
                </li>
            );
        })}
    </ul>
    )
}

export default function Menu(props){
    return(
        <div className={props.menu ? 'Menu' : 'Menu_inactive'}>
            {props.menu ? render_elements(props.page) : null }
           
        </div>
    )
}