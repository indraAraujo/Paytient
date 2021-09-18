import '../../css/Menu.css';
//Icones de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faBullseye, faUser} from "@fortawesome/free-solid-svg-icons";
//Iconed de Material UI
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

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
        icon: <svg data-testid={ShoppingCartOutlinedIcon }></svg>,
        link: "/vendas",

    },
    {
        title: "Clientes",
        icon: <FontAwesomeIcon  icon={faUser} />,
        link: "/clientes",

    },
    {
        title: "Cobranças",
        icon: <i class="far fa-chart-bar"></i>,
        link: "/cobranças",

    },
    {
        title: "Configurações",
        icon: <i class="far fa-chart-bar"></i>,
        link: "/configurações",

    },
];