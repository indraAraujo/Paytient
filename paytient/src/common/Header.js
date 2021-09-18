import React from 'react';
import '../css/Header.css';

//Icones de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBell} from "@fortawesome/free-regular-svg-icons";
import { faBars, faUserCircle} from "@fortawesome/free-solid-svg-icons";


//NavBar do BootStrap

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

//Imagem do logo
import logo from '../assets/logo.png';
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {<FontAwesomeIcon  icon={faUserCircle} id="user_icon"/>}
      {children}
    </a>
  ));
export default function Header(){
    return(
        <div className="Header">
            
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                <img src={logo} alt="Logo" className="Logo"/>
                <FontAwesomeIcon  icon={faBars} id="menu_icon"/> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link href="#deets"> <FontAwesomeIcon  icon={faComment} id="icon"/></Nav.Link>
                        <Nav.Link href="#deets"> <FontAwesomeIcon  icon={faBell} id="icon"/></Nav.Link>
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
    )
}