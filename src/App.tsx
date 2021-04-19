import './App.css';
import GridFloristeria from './components/grid/grid';
import Menu from './components/menu/menu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetallesFlor from './components/detalles/detallesItem';
import { FlorProvider } from './context/FlorContext';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Menu></Menu>
      <header className="App-header">
        
        <Switch>
          <FlorProvider>
          <Route path='/' component={GridFloristeria} exact></Route>
          <Route path='/flor' component={DetallesFlor} exact></Route>
          </FlorProvider>
        </Switch>
        
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
