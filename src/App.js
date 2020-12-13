import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Drawer from './components/Drawer';
import Home from './components/Home';
import Customers from './components/Customers';
import Trainings from './components/Trainings';
import Trainingcalendar from './components/Trainingcalendar';

function App() {

  return (
    <div>
    <BrowserRouter>
      <Drawer />
      <div>
        <Switch>
          <Route exact from="/" render={props => <Home {...props} />} />
          <Route exact path="/customers" render={props => <Customers {...props} />} />
          <Route exact path="/trainings" render={props => <Trainings {...props} />} />
          <Route exact path="/calendar" render={props => <Trainingcalendar {...props} />} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;