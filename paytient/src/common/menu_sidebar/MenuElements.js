import '../../css/Menu.css';
//Icones de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faBullseye, faShoppingCart, faReceipt, faCog} from "@fortawesome/free-solid-svg-icons";
import {  faUser} from "@fortawesome/free-regular-svg-icons";

//Icone de pá
import shovel from '../../assets/shovel_icon.png';

export const MenuElements = [
    {
        title: "Dashboard",
        icon: <FontAwesomeIcon  icon={faChartBar} id="active"/>,
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
        icon: <FontAwesomeIcon  icon={faShoppingCart}/>,
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
        icon: <FontAwesomeIcon  icon={faCog} />,
        link: "/configurações",

    },
];