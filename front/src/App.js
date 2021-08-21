import LoginPage from './components/loginPage'
import RegisterPage from './components/registerPage'
import MainPage from './components/mainPage';
import NetworkPage from './components/networkPage';

import { BrowserRouter as Router, Switch,Route} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // Private Route로 Navbar를 보이도록 해야할듯? 

  return (
    <Router>
      <Switch> 
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='/main'>
          <MainPage />
        </Route>
        <Route path='/network'>
          <NetworkPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
