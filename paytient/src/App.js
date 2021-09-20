import React, {useState} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

//Componentes do Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//Páginas
import Dashboard from './pages/Dashboard';

//Componentes em comum
import Header from './common/Header';
import Menu from './common/menu_sidebar/Menu';

export default function App() {
  const[menu, setMenu] = useState(false);
  const[page, setPage] = useState(0);
  return (
    <div className="App">
      <Header menu={menu} setMenu={setMenu} />
      <Container id="container">
        <Row id="row">
          <Col md="auto" id="col_menu">
            <Menu menu={menu} page={page} />
          </Col>
          <Col xs={10} md={9} id="col_pages">
            <Switch>
              <Route exact path="/"  component={Dashboard} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
    
  );
}

