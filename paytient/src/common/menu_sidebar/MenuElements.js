import '../../css/Menu.css';
//Icones de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faBullseye, faShoppingCart, faReceipt, faCog} from "@fortawesome/free-solid-svg-icons";
import {  faUser} from "@fortawesome/free-regular-svg-icons";

//Iconed de Material UI

export const MenuElements = [
    {
        title: "Dashboard",
        icon: <FontAwesomeIcon  icon={faChartBar} id="active"/>,
        link: "/dashboard",

    },
    {
        title: "Leads",
        icon: <i class="far fa-chart-bar"></i>, 
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