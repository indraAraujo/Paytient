
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';

//Importação das Páginas
import Dashboard from './pages/Dashboard';

//Importação dos componentes em comum
import Menu from './common/menu_sidebar/Menu';
import Header from './common/Header';
//<Menu/>
export default function App() {
  return (
    <div className="App">
        <Header/>
        <main>
          <Switch>
            <Route exact path="/"  component={Dashboard}/>
          </Switch>
        </main>
       
    </div>
    
  );
}

