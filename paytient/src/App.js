import React, {useState} from 'react';
import './App.css';

//React Router para navegação
import {Route, Switch} from 'react-router-dom';

//Componentes do Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//Páginas
import Dashboard from './pages/Dashboard';

//Componentes em comum de todas as págians
import Header from './common/Header';
import Menu from './common/menu_sidebar/Menu';

export default function App() {
  //estados elevados para passar entre as componentes
  const[menu, setMenu] = useState(false);
  const[page, setPage] = useState(0);

  return (
    <div className="App">
      {/*Componente Header */}
      <Header menu={menu} setMenu={setMenu} />
      <Container id="container">
        <Row id="row">
          {/*Coluna para o Menu abrir e fechar */}
          <Col md="auto" id="col_menu">
            <Menu menu={menu} page={page} />
          </Col>
          {/*Coluna para a página atual se ajustar conforme o estado do menu */}
          <Col xs={10} md={9} id="col_pages">
            <Switch>
              {/*Página Dashboard */}
              <Route exact path="/"  component={Dashboard} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
    
  );
}

