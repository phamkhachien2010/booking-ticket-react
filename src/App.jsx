import { createBrowserHistory } from 'history'
import { Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';
import LoadingComponent from './components/loadingComponent/LoadingComponent';
import Hompage from './pages/Homepage/Hompage';
import Login from './pages/Sign/Login';
import Register from './pages/Sign/Register';
import HomeTemplate from './templates/HomeTemplates/HomeTemplate';
import UserTemplates from './templates/UserTemplates/UserTemplates';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
       <LoadingComponent />
      <Switch>

        <HomeTemplate path='/home' exact Component={Hompage} />

        <UserTemplates path='/login' exact Component={Login} />
        <UserTemplates path='/register' exact Component={Register} />

        <HomeTemplate path='/' exact Component={Hompage} />
      </Switch>
    </Router>
  );
}

export default App;
