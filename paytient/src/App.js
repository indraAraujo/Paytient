
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';

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
  return (
    <div className="App">
      <Header/>
      <Container id="container">
        <Row id="row">
          <Col md="auto" id="col_menu">
            <Menu/>
          </Col>
          <Col xs={12} md={8} id="col_pages">
            <Switch>
              <Route exact path="/"  component={Dashboard}/>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
    
  );
}

