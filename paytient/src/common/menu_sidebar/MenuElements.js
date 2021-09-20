
/*
*   Lista dos itens (páginas) no menu vertical
*/

import '../../css/Menu.css';

//Icones de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faBullseye, faReceipt} from "@fortawesome/free-solid-svg-icons";
import {  faUser} from "@fortawesome/free-regular-svg-icons";

//Icone de Ant Design 
import {AiOutlineShoppingCart} from 'react-icons/ai';

//Icone de BoxIcons
import {BiCog} from 'react-icons/bi';

//Icone de pá
import shovel from '../../assets/shovel_icon.png';

//Lista de objetos que contém o título da página, o ícone no menu e o link para a página
export const MenuElements = [
    {
        title: "Dashboard",
        icon: <FontAwesomeIcon  icon={faChartBar}/>,
        link: "/dashboard",

    },
    {
        title: "Leads",
        icon: <img src={shovel} alt="Shovel"/>,
        link: "/leads",

    },
    {
        title: "Campanhas",
        icon: <FontAwesomeIcon  icon={faBullseye} />,
        link: "/campanhas",

    },
    {
        title: "Vendas",
        icon: <AiOutlineShoppingCart/>,
        link: "/vendas",

    },
    {
        title: "Clientes",
        icon: <FontAwesomeIcon  icon={faUser} />,
        link: "/clientes",

    },
    {
        title: "Cobranças",
        icon: <FontAwesomeIcon  icon={faReceipt} />,
        link: "/cobranças",

    },
    {
        title: "Configurações",
        icon: <BiCog />,
        link: "/configurações",

    },
];