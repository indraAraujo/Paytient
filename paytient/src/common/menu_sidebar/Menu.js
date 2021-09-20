/*
*   Componente do menu vertical
*/
import '../../css/Menu.css';
import { Link } from 'react-router-dom';
import {MenuElements} from './MenuElements';

//Função para renderizar os itens do menu quando aberto.
//Recebe o número da página atual para lidar com os itens ativos e inativos
//se o número da página recebido for igual a chave (numero do item do menu) que está sendo renderizado
//então é usado as estilizações para item ativo
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

//O componente recebe o estado menu (props.menu -> aberto - true - ou fechado - false), vindo
//do componente pai (App())
export default function Menu(props){
    return(
        <div className={props.menu ? 'Menu' : 'Menu_inactive'}>
            {props.menu ? render_elements(props.page) : null }
        </div>
    )
}