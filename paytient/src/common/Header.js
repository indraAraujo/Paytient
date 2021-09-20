/*
* Componente do header da site
*/

import React from 'react';
import '../css/Header.css';

//Icones de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBell} from "@fortawesome/free-regular-svg-icons";
import { faBars} from "@fortawesome/free-solid-svg-icons";


//Componentes do BootStrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';


//Imagem do logo
import logo from '../assets/logo.png';

//Função para customizar o botão do menu estilo dropdown para a foto de perfil do usuário
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

//Componente define o estado do menu através do props.setMenu de acordo com o estado que recebe
export default function Header(props){
    //Função para trocar o estado do menu (abrir ou fechar o menu de acordo com o clique no icone "Bars")
    const showMenu=()=>{
        props.setMenu(!props.menu);
    }
    return(
    <>
        <div className="Header"> 
            <Navbar collapseOnSelect expand="lg" >
                <Container id="container_navbar">
                {/*Lado direito do header */}
                <img src={logo} alt="Logo" className="Logo"/>
                <FontAwesomeIcon  icon={faBars} id="menu_icon" onClick={showMenu}/> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto"></Nav>
                    <Nav >
                        {/*Lado esquerdo do header */}
                        <Nav.Link href="#comment"> <FontAwesomeIcon  icon={faComment} id="icon"/></Nav.Link>
                        <Nav.Link href="#notifications"> <FontAwesomeIcon  icon={faBell} id="icon"/></Nav.Link>
                        {/*Menu dropdown do ícone de perfil */}
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