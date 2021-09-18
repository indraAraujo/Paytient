import '../../css/Menu.css';

import {MenuElements} from './MenuElements';


export default function Menu(){
    return(
        <div className="Menu">
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
        </div>
    )
}