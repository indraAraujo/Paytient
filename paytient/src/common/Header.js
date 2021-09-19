import React, {useState} from 'react';
import '../css/Header.css';

//Icones de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBell} from "@fortawesome/free-regular-svg-icons";
import { faBars, faUserCircle} from "@fortawesome/free-solid-svg-icons";


//Componentes do BootStrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';


//Imagem do logo
import logo from '../assets/logo.png';


//Função para customizar o botão do menu estilo dropdown
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {<div id="profile_photo"></div>}
      {children}
    </a>
  ));

export default function Header(){
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return(
    <>
        <div className="Header"> 
            <Navbar collapseOnSelect expand="lg" >
                <Container id="container_navbar">
                <img src={logo} alt="Logo" className="Logo"/>
                <FontAwesomeIcon  icon={faBars} id="menu_icon" onClick={showSidebar}/> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto"></Nav>
                    <Nav >
                        <Nav.Link href="#comment"> <FontAwesomeIcon  icon={faComment} id="icon"/></Nav.Link>
                        <Nav.Link href="#notifications"> <FontAwesomeIcon  icon={faBell} id="icon"/></Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components"></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item >Meus Dados</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item >Alterar Senha</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item >Planos</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item >Serviços</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item >Dúvidas Frequentes</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item >Contato</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item >Sair</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
     </>
    )
}